import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WA_LINK, themeDemoUrl } from "@/data/site"

const STATS = [
  { value: "21", label: "Tema yang disutradarai" },
  { value: "∞", label: "Aktif selamanya" },
  { value: "Rp0", label: "Di muka*" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-16">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-purple-800/20 blur-3xl" />
        <div className="absolute top-64 -right-24 h-72 w-72 rounded-full bg-gold-700/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
        <div className="flex flex-col items-start gap-6">
          <Badge
            variant="outline"
            className="border-gold-500/40 bg-gold-500/10 text-gold-300"
          >
            ✦ Undangen — “undangan” dalam bahasa Karo
          </Badge>
          <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-balance text-cream-50 sm:text-6xl lg:text-7xl">
            Sukacita dimulai
            <br />
            dari <span className="text-gold-gradient italic">undangan.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-cream-50/70 sm:text-lg">
            Kami merancang undangan digital untuk pernikahan, aqiqah, khitanan,
            dan setiap momen berharga — dibuatkan khusus untukmu, dengan
            sentuhan yang membuat setiap tamu merasa dinanti.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-gold-500 font-semibold text-ink-950 hover:bg-gold-400"
              render={<a href="#tema">Jelajahi 21 Tema</a>}
            />
            <Button
              size="lg"
              variant="outline"
              className="border-cream-50/25 bg-transparent text-cream-50 hover:bg-cream-50/10 hover:text-cream-50"
              render={
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Pesan via WhatsApp
                </a>
              }
            />
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-cream-50/10 pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-gold-300">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs text-cream-50/60">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[11px] text-cream-50/60">
            *Dibuatkan dulu — bayar setelah kamu jatuh cinta dengan hasilnya.
          </p>
        </div>

        {/* invitation cover — addressed to the guest, like a real one */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-ink-800 to-ink-950 p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
            <p className="text-center text-[11px] tracking-[0.35em] text-gold-400 uppercase">
              Kepada Yth.
            </p>
            <p className="mt-2 text-center text-[11px] tracking-[0.2em] text-cream-50/50 uppercase">
              Bapak / Ibu / Saudara/i
            </p>
            <p className="mt-5 text-center font-display text-4xl font-bold text-gold-gradient italic">
              Tamu Undangan
            </p>
            <p className="mx-auto mt-5 max-w-[16rem] text-center text-xs leading-relaxed text-cream-50/55">
              Setiap tamu menerima undangan yang menyebut namanya — seperti
              undangan fisik yang ditulis tangan.
            </p>
            <div className="mx-auto mt-6 flex max-w-[12rem] items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
              <span className="text-xs font-medium text-gold-200">
                Buka undangan
              </span>
            </div>
            <div className="absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
          </div>
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold-500/10 blur-2xl"
          />
          <a
            href={themeDemoUrl("modern-elegan")}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-gold-500/40 bg-ink-950 px-5 py-2 text-xs font-semibold whitespace-nowrap text-gold-300 shadow-lg transition-colors hover:bg-gold-500 hover:text-ink-950"
          >
            Rasakan demo live →
          </a>
        </div>
      </div>
    </section>
  )
}
