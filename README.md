# MomenKu — Demo Tema Undangan Digital

Demo tema undangan pernikahan digital MomenKu (by FinOwi Id).

**Galeri tema:** https://finowi.github.io/momenku-demo/galeri-tema.html

## 8 Tema (per 2026-10-13)

| Tema | URL |
|---|---|
| Modern Elegan ⭐ | https://finowi.github.io/momenku-demo/ |
| Floral Romance | https://finowi.github.io/momenku-demo/tema/floral/ |
| Ageng Jawa (adat Jawa) | https://finowi.github.io/momenku-demo/tema/adat-jawa/ |
| Ulos Heritage (adat Batak) | https://finowi.github.io/momenku-demo/tema/adat-batak/ |
| Barakah Islami | https://finowi.github.io/momenku-demo/tema/islami/ |
| Putih Bersih (minimalis) | https://finowi.github.io/momenku-demo/tema/minimalis/ |
| Kebun Rustic | https://finowi.github.io/momenku-demo/tema/rustic/ |
| Noir Royal | https://finowi.github.io/momenku-demo/tema/royal/ |

Coba dengan nama tamu personal: `?to=Nama+Tamu` di akhir URL mana pun.

## Template engine (Fase 1)

Satu template → banyak tema, persis seperti rencana sistem:

```
engine/template.html   → kerangka undangan (cover, countdown, acara, galeri, RSVP, ucapan, amplop)
engine/themes.json     → 7 config tema (warna, font, foto, ornamen, nama demo)
engine/build.py        → render ke tema/<slug>/index.html
```

Tambah tema baru = tambah 1 blok JSON + `python3 engine/build.py`. Nanti `themes.json`
diganti input form pelanggan (nama, tanggal, foto) — fondasi sistem order manual via WA.

## Isi tiap demo
Cover + sapaan nama tamu (`?to=`) · ayat/quote · profil mempelai · countdown live ·
Simpan ke Google Calendar · Akad & Resepsi + Google Maps · galeri + lightbox ·
love story · RSVP · buku ucapan · amplop digital + salin nomor · musik (demo).

## Data
Seluruh nama, tanggal, alamat, dan nomor rekening di demo ini **fiktif**. Foto dibuat dengan AI.
