# Undangen Order Pipeline

Ubah order pelanggan menjadi undangan live di `undangen.my.id/<slug>/`.

## Arsitektur

- **Data**: Firestore (project `simcha-rsvp`) — RSVP & ucapan, terisolasi per slug.
- **Foto**: Supabase Storage (bucket `simcha-photos`) — gratis 1GB, tanpa kartu.
- **Halaman**: statis di `u/<slug>/index.html`, deploy via git push (GitHub Pages).

## Setup sekali (zgg)

1. Supabase Dashboard → Storage → New bucket: `simcha-photos`, Public ON.
2. SQL Editor → paste `supabase-storage-setup.sql` → Run.

## Alur order

```bash
# 1. scaffold order baru dari tema
python3 new-order.py rizky-putri --tema floral

# 2. isi orders/rizky-putri/order.json, taruh foto di orders/rizky-putri/foto/

# 3. render (upload foto + generate halaman)
python3 build-order.py rizky-putri

# 4. deploy
git add u/rizky-putri && git commit -m "Order: rizky-putri" && git push
# live di https://undangen.my.id/rizky-putri/ (±2 mnt)
```

## Catatan

- `orders/` di-gitignore (data mentah pelanggan tetap privat); yang di-commit hanya `u/<slug>/`.
- Maks 30 foto per order (sesuai paket: 10/20/30).
- Link tamu personal: `undangen.my.id/<slug>/?to=Nama+Tamu` (lihat `tools/link-tamu/`).
- Mempelai pantau RSVP di Firebase Console → Firestore → filter `slug == <slug>`.
