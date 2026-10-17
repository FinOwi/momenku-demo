# Undangen — undangen.my.id

Website Undangen (by FinOwi Id) — undangan digital premium. Bahasa Karo: *undangen* = undangan.

**Deploy:** Vercel (project `undangen`, Framework: Next.js). Domain: `undangen.my.id` (+ `www`).

## Struktur

- `app/`, `components/`, `data/`, `lib/`, `hooks/` — source Next.js (homepage; `output: "export"`)
- `public/` — aset statis yang ikut ter-deploy apa adanya:
  - `tema/` — 21 demo tema live (`/tema/<slug>/`)
  - `k3lola/` — panel admin internal (PIN)
  - `engine/` — `template.html` + `themes.json` (dipakai builder & Undangen OS)
  - `tools/` — generator link tamu, order pipeline (Python, internal)
  - `assets/` — gambar tema
- `vercel.json` — rewrites `/i/*`, `/admin/*`, `/pantau/*` → `https://undangen-os.vercel.app` (satu domain untuk tamu)

## Workflow ubah homepage

Edit source → `npm run build` → Vercel auto-deploy dari branch `main`.

## Catatan

- `simcha.my.id` (repo `FinOwi/simcha-redirect`) redirect permanen → `undangen.my.id`.
- Backend: Firebase `simcha-rsvp` (RSVP/ucapan), Supabase (data order), Cloudinary (foto).
