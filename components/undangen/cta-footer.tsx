import { Button } from "@/components/ui/button"
import { WA_LINK } from "@/data/site"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 h-80 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <p className="font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-5xl">
          Momen bahagiamu layak{" "}
          <span className="text-gold-gradient">dirayakan</span> dengan indah
        </p>
        <p className="max-w-xl text-cream-50/60">
          Ceritakan acaramu hari ini — biarkan kami yang menyulapnya jadi
          undangan digital yang bikin tamu terkesan.
        </p>
        <Button
          size="lg"
          className="bg-gold-shimmer animate-shimmer bg-gold-500 px-8 font-semibold text-ink-950 hover:bg-gold-400"
          render={
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Chat WhatsApp Sekarang →
            </a>
          }
        />
        <p className="text-xs text-cream-50/60">
          Respon cepat • Tanpa komitmen • Bayar setelah cocok
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-cream-50/10 bg-ink-950 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-shimmer font-display text-lg font-bold text-ink-950">
            U
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-cream-50">
            Undangen
          </span>
        </a>
        <p className="text-center text-sm text-cream-50/50">
          Undangan digital premium — pernikahan, aqiqah, khitanan, ulang
          tahun, wisuda & korporat.
        </p>
        <div className="flex items-center gap-6 text-sm text-cream-50/50">
          <a href="#tema" className="transition-colors hover:text-gold-300">
            Tema
          </a>
          <a href="#harga" className="transition-colors hover:text-gold-300">
            Harga
          </a>
          <a href="#faq" className="transition-colors hover:text-gold-300">
            FAQ
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold-300"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-cream-50/60">
          © 2026 Undangen by FinOwi Id • undangen.my.id
        </p>
      </div>
    </footer>
  )
}
