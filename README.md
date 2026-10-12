# Simcha — Demo Tema Undangan Digital

Demo tema undangan pernikahan digital **Simcha** (by FinOwi Id).

**Website:** https://simcha.my.id/ (galeri tema)

## 8 Tema (per 2026-10-13)

| Tema | URL |
|---|---|
| Modern Elegan ⭐ | https://simcha.my.id/tema/modern-elegan/ |
| Floral Romance | https://simcha.my.id/tema/floral/ |
| Ageng Jawa (adat Jawa) | https://simcha.my.id/tema/adat-jawa/ |
| Ulos Heritage (adat Batak) | https://simcha.my.id/tema/adat-batak/ |
| Barakah Islami | https://simcha.my.id/tema/islami/ |
| Putih Bersih (minimalis) | https://simcha.my.id/tema/minimalis/ |
| Kebun Rustic | https://simcha.my.id/tema/rustic/ |
| Noir Royal | https://simcha.my.id/tema/royal/ |

Coba dengan nama tamu personal: `?to=Nama+Tamu` di akhir URL mana pun.

## Template engine (Fase 1)

Satu template → banyak tema:

```
engine/template.html   → kerangka undangan (cover, countdown, acara, galeri, RSVP, ucapan, amplop)
engine/themes.json     → config tiap tema (warna, font, foto, ornamen, nama demo)
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
