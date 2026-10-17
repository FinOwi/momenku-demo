#!/usr/bin/env python3
"""Undangen order pipeline — scaffold order baru.

Pakai: python3 new-order.py <slug> --tema <slug-tema>
Contoh: python3 new-order.py rizky-putri --tema floral

Hasil: orders/<slug>/order.json (diisi default dari tema) + orders/<slug>/foto/
Isi order.json, taruh foto di foto/, lalu: python3 build-order.py <slug>
"""
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ENGINE = os.path.join(BASE, 'engine')
ORDERS = os.path.join(BASE, 'orders')


def main():
    if len(sys.argv) < 2 or '--tema' not in sys.argv:
        print(__doc__)
        sys.exit(1)
    slug = sys.argv[1]
    if not re.fullmatch(r'[a-z0-9-]{1,60}', slug):
        sys.exit('slug harus [a-z0-9-], maks 60 char')
    tema_slug = sys.argv[sys.argv.index('--tema') + 1]

    themes = json.load(open(os.path.join(ENGINE, 'themes.json'), encoding='utf-8'))
    tema = next((t for t in themes if t['slug'] == tema_slug), None)
    if not tema:
        sys.exit('tema tidak dikenal: %s' % tema_slug)

    odir = os.path.join(ORDERS, slug)
    fdir = os.path.join(odir, 'foto')
    os.makedirs(fdir, exist_ok=True)

    order = {
        'slug': slug,
        'tema': tema_slug,
        # --- data mempelai (wajib diisi) ---
        'c1': tema.get('C1', ''),
        'c1full': tema.get('C1FULL', ''),
        'c2': tema.get('C2', ''),
        'c2full': tema.get('C2FULL', ''),
        'p1': tema.get('P1', ''),
        'p2': tema.get('P2', ''),
        # --- acara ---
        'datetime_iso': '2027-02-20T08:00:00+07:00',
        'date_label': 'Sabtu, 20 Februari 2027',
        'date_short': '20 Februari 2027',
        'date_rsvp': '10 Februari 2027',
        'date_cover': 'Sabtu · 20 Februari 2027',
        'venue': tema.get('VENUE', ''),
        'venue_addr': tema.get('VENUE_ADDR', ''),
        'maps_q': tema.get('MAPS_Q', ''),
        # --- amplop digital (kosongkan bank2 bila hanya 1 rekening) ---
        'gift1_bank': 'Bank BCA',
        'gift1_num': '123 456 7890',
        'gift1_an': '',
        'gift2_bank': 'DANA / OVO / GoPay',
        'gift2_num': '0812 3456 7890',
        'gift2_an': '',
        # --- galeri: nama file di foto/ (maks 30). Foto pertama = cover. ---
        'galeri': [],
        # --- kutipan (opsional, kosongkan = pakai default tema) ---
        'quote': '',
        'quote_src': '',
    }
    opath = os.path.join(odir, 'order.json')
    with open(opath, 'w', encoding='utf-8') as f:
        json.dump(order, f, ensure_ascii=False, indent=2)
    print('OK: %s' % opath)
    print('Langkah: isi order.json, taruh foto di %s/, lalu:' % fdir)
    print('  python3 build-order.py %s' % slug)


if __name__ == '__main__':
    main()
