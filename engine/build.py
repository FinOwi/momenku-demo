#!/usr/bin/env python3
"""MomenKu template engine: render engine/template.html x engine/themes.json -> tema/<slug>/index.html"""
import json, os, re, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENGINE = os.path.join(BASE, 'engine')

def main():
    with open(os.path.join(ENGINE, 'template.html'), encoding='utf-8') as f:
        tpl = f.read()
    with open(os.path.join(ENGINE, 'themes.json'), encoding='utf-8') as f:
        themes = json.load(f)

    keys = set(re.findall(r'@[A-Z0-9_]+@', tpl))
    rendered = []
    for t in themes:
        t['SLUG'] = t['slug']
        t.setdefault('ROOM_HTML', '')
        t.setdefault('COVER_VIDEO', '<div class="bg"></div>')
        # default order-pipeline agar demo lama tetap identik
        t.setdefault('DATETIME_ISO', '2027-02-20T08:00:00+07:00')
        t.setdefault('DATE_LABEL', 'Sabtu, 20 Februari 2027')
        t.setdefault('DATE_SHORT', '20 Februari 2027')
        t.setdefault('DATE_RSVP', '10 Februari 2027')
        t.setdefault('DATE_COVER', 'SABTU · 20 FEBRUARI 2027')
        t.setdefault('GIFT1_BANK', 'Bank BCA')
        t.setdefault('GIFT1_NUM', '123 456 7890')
        t.setdefault('GIFT1_RAW', '1234567890')
        t.setdefault('GIFT1_AN', 'a.n. ' + t.get('C1FULL', ''))
        t.setdefault('GIFT2_BANK', 'DANA / OVO / GoPay')
        t.setdefault('GIFT2_NUM', '0812 3456 7890')
        t.setdefault('GIFT2_RAW', '081234567890')
        t.setdefault('GIFT2_AN', 'a.n. ' + t.get('C2FULL', ''))
        if 'GALLERY_ITEMS' not in t:
            items = []
            couple = '%s dan %s' % (t.get('C1', ''), t.get('C2', ''))
            for i, gk in enumerate(('G1', 'G2', 'G3')):
                g = t.get(gk, '')
                alt = couple if i == 0 else 'Momen bahagia'
                items.append(
                    '<a href="%s"><img src="%s" alt="%s" loading="lazy"></a>'
                    % (g, g, alt))
            t['GALLERY_ITEMS'] = '\n      '.join(items)
        missing = keys - set('@%s@' % k for k in t.keys())
        if missing:
            print('WARN %s: missing keys %s' % (t['slug'], sorted(missing)), file=sys.stderr)
        html = tpl
        for k, v in t.items():
            html = html.replace('@%s@' % k, v)
        leftover = set(re.findall(r'@[A-Z0-9_]+@', html))
        if leftover:
            print('WARN %s: unreplaced %s' % (t['slug'], sorted(leftover)), file=sys.stderr)
        outdir = os.path.join(BASE, 'tema', t['slug'])
        os.makedirs(outdir, exist_ok=True)
        with open(os.path.join(outdir, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(html)
        rendered.append(t['slug'])
    print('rendered: ' + ', '.join(rendered))

if __name__ == '__main__':
    main()
