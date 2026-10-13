#!/usr/bin/env python3
"""Simcha order pipeline — render order jadi undangan live.

Pakai: python3 build-order.py <slug> [--no-upload]
  --no-upload : lewati upload foto (pakai path lokal), untuk tes render.

Alur:
  orders/<slug>/order.json + orders/<slug>/foto/*
    -> upload foto ke Supabase Storage (bucket simcha-photos)
    -> render engine/template.html dengan data order
    -> u/<slug>/index.html  (commit + push = live di simcha.my.id/<slug>/)

RSVP/ucapan otomatis terisolasi per slug via Firestore (SIMCHA_SLUG).
"""
import json
import mimetypes
import os
import re
import sys
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ENGINE = os.path.join(BASE, 'engine')
ORDERS = os.path.join(BASE, 'orders')
OUT = os.path.join(BASE, 'u')

IMG_EXT = ('.jpg', '.jpeg', '.png', '.webp')


def supa_cfg():
    # kredensial dari file yang sama dipakai OGKasir (600, jangan di-commit)
    p = os.path.expanduser('~/workspace/ogkasir-backup/supabase.json')
    d = json.load(open(p, encoding='utf-8'))
    return d['url'], d['anon_key']


def upload_foto(slug, fdir, files):
    url, key = supa_cfg()
    urls = []
    for fn in files:
        path = os.path.join(fdir, fn)
        mime = mimetypes.guess_type(fn)[0] or 'image/jpeg'
        obj = 'simcha-photos/%s/%s' % (slug, fn)
        req = urllib.request.Request(
            '%s/storage/v1/object/%s' % (url, obj),
            data=open(path, 'rb').read(),
            headers={'apikey': key, 'Authorization': 'Bearer ' + key,
                     'Content-Type': mime, 'x-upsert': 'true'},
            method='POST')
        try:
            urllib.request.urlopen(req, timeout=60)
        except Exception as e:
            sys.exit('UPLOAD GAGAL %s: %s\n(pastikan bucket simcha-photos + policy sudah dibuat)' % (fn, e))
        urls.append('%s/storage/v1/object/public/%s' % (url, obj))
        print('  upload: %s' % fn)
    return urls


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    slug = sys.argv[1]
    no_upload = '--no-upload' in sys.argv

    odir = os.path.join(ORDERS, slug)
    order = json.load(open(os.path.join(odir, 'order.json'), encoding='utf-8'))
    themes = json.load(open(os.path.join(ENGINE, 'themes.json'), encoding='utf-8'))
    tema = next(t for t in themes if t['slug'] == order['tema'])
    tpl = open(os.path.join(ENGINE, 'template.html'), encoding='utf-8').read()

    # --- foto ---
    fdir = os.path.join(odir, 'foto')
    files = sorted([f for f in os.listdir(fdir)
                    if f.lower().endswith(IMG_EXT)]) if os.path.isdir(fdir) else []
    want = order.get('galeri') or files
    if len(want) > 30:
        sys.exit('maks 30 foto, dapat %d' % len(want))
    if no_upload:
        urls = ['foto/' + f for f in want]
    else:
        if not want:
            sys.exit('tidak ada foto di %s/' % fdir)
        print('upload %d foto...' % len(want))
        urls = upload_foto(slug, fdir, want)

    # --- data render: tema sebagai basis, order menimpa ---
    d = dict(tema)
    c1, c2 = order['c1'], order['c2']
    c1full, c2full = order.get('c1full') or c1, order.get('c2full') or c2
    d.update({
        'SLUG': slug,
        'C1': c1, 'C1FULL': c1full, 'C1_INITIAL': c1[:1].upper(),
        'C2': c2, 'C2FULL': c2full, 'C2_INITIAL': c2[:1].upper(),
        'P1': order.get('p1', ''), 'P2': order.get('p2', ''),
        'VENUE': order.get('venue', ''), 'VENUE_ADDR': order.get('venue_addr', ''),
        'MAPS_Q': order.get('maps_q', ''),
        'DATETIME_ISO': order['datetime_iso'],
        'DATE_LABEL': order['date_label'],
        'DATE_SHORT': order['date_short'],
        'DATE_RSVP': order['date_rsvp'],
        'DATE_COVER': order.get('date_cover') or order['date_label'].upper(),
        'GIFT1_BANK': order['gift1_bank'], 'GIFT1_NUM': order['gift1_num'],
        'GIFT1_RAW': re.sub(r'\D', '', order['gift1_num']),
        'GIFT1_AN': order.get('gift1_an') or ('a.n. ' + c1full),
        'COVER_IMG': urls[0] if urls else tema.get('COVER_IMG', ''),
    })
    if order.get('gift2_bank'):
        d.update({
            'GIFT2_BANK': order['gift2_bank'], 'GIFT2_NUM': order['gift2_num'],
            'GIFT2_RAW': re.sub(r'\D', '', order['gift2_num']),
            'GIFT2_AN': order.get('gift2_an') or ('a.n. ' + c2full),
        })
    if order.get('quote'):
        d['QUOTE'] = order['quote']
        d['QUOTE_SRC'] = order.get('quote_src', '')

    items = []
    for i, u in enumerate(urls):
        alt = '%s dan %s' % (c1, c2) if i == 0 else 'Momen bahagia'
        items.append('<a href="%s"><img src="%s" alt="%s" loading="lazy"></a>' % (u, u, alt))
    d['GALLERY_ITEMS'] = '\n      '.join(items)

    # render (setdefault ala build.py agar tak ada placeholder gantung)
    d.setdefault('ROOM_HTML', '')
    d.setdefault('COVER_VIDEO', '<div class="bg"></div>')

    # buang kotak rekening ke-2 bila tak dipakai (sebelum render)
    if not order.get('gift2_bank'):
        tpl = re.sub(
            r'\s*<div class="gift rv">\s*<div class="bank">@GIFT2_BANK@</div>.*?</button>\s*</div>',
            '', tpl, flags=re.S)

    html = tpl
    for k, v in d.items():
        html = html.replace('@%s@' % k, v)

    leftover = set(re.findall(r'@[A-Z0-9_]+@', html))
    if leftover:
        print('WARN: placeholder gantung %s' % sorted(leftover), file=sys.stderr)

    outdir = os.path.join(OUT, slug)
    os.makedirs(outdir, exist_ok=True)
    with open(os.path.join(outdir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print('OK: u/%s/index.html (%d foto)' % (slug, len(urls)))
    print('Live setelah: git add u/%s && git commit && git push' % slug)
    print('RSVP terisolasi di Firestore slug="%s"' % slug)


if __name__ == '__main__':
    main()
