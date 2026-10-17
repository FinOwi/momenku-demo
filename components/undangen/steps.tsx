import { Badge } from "@/components/ui/badge"

const STEPS = [
  {
    no: "01",
    title: "Ceritakan momenmu",
    desc: "Chat via WhatsApp — ceritakan acaramu dan tema impianmu. Semakin personal ceritanya, semakin berjiwa undangannya.",
  },
  {
    no: "02",
    title: "Kami merancang",
    desc: "Undangan dibuatkan khusus untukmu, biasanya dalam 1–3 hari. Bukan template yang diganti nama.",
  },
  {
    no: "03",
    title: "Kamu periksa",
    desc: "Revisi sampai kamu jatuh cinta. Belum cocok? Belum bayar. Sesederhana itu.",
  },
  {
    no: "04",
    title: "Sebar & rayakan",
    desc: "Link personal untuk setiap tamu, siap disebar. Aktif selamanya — kenanganmu tak punya tanggal kedaluwarsa.",
  },
]

export function Steps() {
  return (
    <section id="cara-pesan" className="bg-cream-50 py-20 text-ink-950 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="border-gold-600/40 bg-gold-500/10 text-gold-700"
          >
            Cara Pesan
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Dari cerita menjadi <span className="italic">undangan.</span>
          </h2>
          <p className="text-ink-950/60">
            Empat langkah tenang — tanpa formulir rumit, tanpa uang muka.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.no}
              className="relative rounded-xl border border-ink-950/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
            >
              <span aria-hidden="true" className="font-display text-4xl font-bold text-gold-600/50">
                {s.no}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
