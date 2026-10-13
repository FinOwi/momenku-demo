-- Simcha RSVP backend — pola sama seperti OGKasir cloud backup:
-- tabel TANPA policy (akses langsung ditolak total) + 2 fungsi SECURITY DEFINER
-- yang divalidasi ketat. Anon key aman dipasang di halaman undangan.
--
-- CARA PAKAI: paste SEKALI di SQL Editor dashboard Supabase
-- (project OGKasir: https://supabase.com/dashboard/project/ypdfdaxgqgkaupsyiauy/sql),
-- lalu tekan Run.

create table if not exists public.simcha_rsvps (
  id          bigserial primary key,
  slug        text not null,                 -- id undangan, mis. "modern-elegan" / "rizky-putri"
  name        text not null,                 -- nama tamu
  attendance  text,                          -- 'hadir' | 'tidak' | null (baris ucapan saja)
  guest_count int,                           -- jumlah tamu (rsvp saja)
  message     text,                          -- ucapan (null untuk rsvp saja)
  created_at  timestamptz not null default now()
);
create index if not exists simcha_rsvps_slug_idx
  on public.simcha_rsvps (slug, created_at desc);

alter table public.simcha_rsvps enable row level security;
-- SENGAJA tanpa policy: anon/authenticated tidak bisa SELECT/INSERT/UPDATE langsung.

-- Ambil 50 ucapan terbaru untuk satu undangan (data publik by design: tampil di halaman).
create or replace function public.simcha_rsvp_list(p_slug text)
returns table (name text, message text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if p_slug !~ '^[a-z0-9-]{1,60}$' then raise exception 'bad_slug'; end if;
  return query
    select r.name, r.message, r.created_at
    from public.simcha_rsvps r
    where r.slug = p_slug and r.message is not null and r.message <> ''
    order by r.created_at desc
    limit 50;
end $$;

-- Simpan satu RSVP dan/atau ucapan. p_hp = honeypot (wajib kosong).
create or replace function public.simcha_rsvp_submit(
  p_slug text, p_name text, p_attendance text,
  p_guest_count int, p_message text, p_hp text)
returns bigint
language plpgsql security definer set search_path = public as $$
declare nid bigint;
begin
  if p_slug !~ '^[a-z0-9-]{1,60}$' then raise exception 'bad_slug'; end if;
  if char_length(coalesce(p_name, '')) < 2 or char_length(p_name) > 50
    then raise exception 'bad_name'; end if;
  if p_attendance is not null and p_attendance not in ('hadir', 'tidak')
    then raise exception 'bad_attendance'; end if;
  if p_guest_count is not null and (p_guest_count < 1 or p_guest_count > 20)
    then raise exception 'bad_count'; end if;
  if p_message is not null and char_length(p_message) > 500
    then raise exception 'bad_message'; end if;
  if coalesce(p_hp, '') <> '' then raise exception 'spam'; end if;
  if coalesce(p_message, '') = '' and p_attendance is null
    then raise exception 'empty'; end if;
  insert into public.simcha_rsvps(slug, name, attendance, guest_count, message)
  values (p_slug, trim(p_name), p_attendance, p_guest_count,
          nullif(trim(coalesce(p_message, '')), ''))
  returning id into nid;
  return nid;
end $$;

grant execute on function public.simcha_rsvp_list(text) to anon;
grant execute on function public.simcha_rsvp_submit(text, text, text, int, text, text) to anon;
