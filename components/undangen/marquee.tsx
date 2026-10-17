const ITEMS = [
  "Pernikahan",
  "Aqiqah",
  "Khitanan",
  "Ulang Tahun",
  "Wisuda",
  "Syukuran",
  "Korporat",
  "Pertunangan",
]

export function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <section className="overflow-hidden border-y border-gold-500/20 bg-ink-900 py-5">
      <div className="animate-marquee motion-reduce:animate-none flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg tracking-wide text-cream-50/80 italic">
              {item}
            </span>
            <span aria-hidden className="text-gold-500">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
