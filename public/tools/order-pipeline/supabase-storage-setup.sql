-- Simcha order pipeline — setup SATU KALI di dashboard Supabase.
--
-- LANGKAH 1 (Dashboard > Storage): buat bucket baru
--   Name: simcha-photos | Public: ON (centang)
--
-- LANGKAH 2 (Dashboard > SQL Editor): paste SELURUH file ini -> Run.
--   Membuat policy: publik boleh baca, anon boleh upload (tulis saja).

-- pastikan bucket ada & publik (abaikan bila sudah dibuat via dashboard)
insert into storage.buckets (id, name, public)
values ('simcha-photos', 'simcha-photos', true)
on conflict (id) do update set public = true;

-- hapus policy lama bila ada (biar bisa di-run ulang)
drop policy if exists "simcha public read" on storage.objects;
drop policy if exists "simcha anon upload" on storage.objects;

-- siapa pun boleh LIHAT foto (undangan sifatnya publik)
create policy "simcha public read"
on storage.objects for select to anon
using (bucket_id = 'simcha-photos');

-- anon boleh UPLOAD (script order pipeline pakai anon key);
-- hanya INSERT: tak bisa ubah/hapus/timpa file orang lain tanpa upsert flag.
-- (build-order.py memakai header x-upsert agar order bisa di-render ulang.)
create policy "simcha anon upload"
on storage.objects for insert to anon
with check (bucket_id = 'simcha-photos');

-- update butuh policy sendiri (untuk render ulang order yang sama)
drop policy if exists "simcha anon upsert" on storage.objects;
create policy "simcha anon upsert"
on storage.objects for update to anon
using (bucket_id = 'simcha-photos')
with check (bucket_id = 'simcha-photos');
