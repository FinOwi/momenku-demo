import { Badge } from "@/components/ui/badge"
import { Ornament } from "@/components/undangen/ornament"

const MOMENTS = [
  {
    no: "01",
    title: "Sampul terbuka untuknya",
    desc: "Nama tamu tertera di cover — seperti undangan fisik yang ditulis tangan khusus untuknya. Satu link, satu tamu, satu sapaan personal.",
  },
  {
    no: "02",
    title: "Musik menyambut",
    desc: "Lagu pilihanmu mengalun begitu undangan dibuka. Momen itu langsung punya suasananya sendiri.",
  },
  {
    no: "03",
    title: "Cerita mengalir",
    desc: "Mempelai, galeri, kisah cinta, rundown acara — tamu menggulir pelan, dan harimu terasa semakin dekat.",
  },
  {
    no: "04",
    title: "Satu tap untuk hadir",
    desc: "Konfirmasi kehadiran, kirim ucapan, hingga amplop digital — semuanya tanpa perlu install aplikasi apa pun.",
  },
]

/**
 * The guest's journey — a vertical narrative, not a feature grid.
 * "The brain loves narratives. It distrusts lists."
 */
export function Ritual() {
  return (
    <section id="pengalaman" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="border-gold-500/40 bg-gold-500/10 text-gold-300"
          >
            Pengalaman Tamu
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-cream-50 sm:text-4xl lg:text-5xl">
            Bukan dibuka. <span className="text-gold-gradient italic">Disambut.</span>
          </h2>
          <p className="max-w-xl text-cream-50/60">
            Inilah yang dirasakan tamu dari detik pertama membuka undanganmu —
            sebuah ritual kecil, bukan sekadar halaman web.
          </p>
        </div>

        <ol className="relative mt-14 space-y-2">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[27px] w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent sm:left-[31px]"
          />
          {MOMENTS.map((m) => (
            <li key={m.no} className="relative flex gap-6 py-6 sm:gap-8">
              <span
                aria-hidden
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-ink-900 font-display text-sm font-bold text-gold-300 sm:h-16 sm:w-16"
              >
                {m.no}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3 className="font-display text-xl font-bold text-cream-50 sm:text-2xl">
                  {m.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream-50/60 sm:text-base">
                  {m.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <Ornament className="mt-8" />
      </div>
    </section>
  )
}
