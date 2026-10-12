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
