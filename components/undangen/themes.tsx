import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { THEMES, themeDemoUrl, WA_LINK } from "@/data/site"
import { cn } from "@/lib/utils"

export function Themes() {
  return (
    <section id="tema" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="border-gold-500/40 bg-gold-500/10 text-gold-300"
          >
            Koleksi Tema
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-cream-50 sm:text-4xl lg:text-5xl">
            Setiap tema, <span className="text-gold-gradient italic">sebuah dunia.</span>
          </h2>
          <p className="max-w-xl text-cream-50/60">
            Dari kemegahan adat hingga neon kota — klik dan rasakan demo
            live-nya, persis seperti yang akan dilihat tamumu.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((t, i) => (
            <li key={t.slug}>
              <article className="group h-full overflow-hidden rounded-xl border border-cream-50/10 bg-ink-900 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_20px_50px_-15px_rgba(201,162,39,0.25)]">
                <div
                  className={cn(
                    "relative flex h-40 items-center justify-center bg-gradient-to-br",
                    t.art
                  )}
                >
                  {t.badge && (
                    <Badge className="absolute top-3 left-3 bg-ink-950/80 text-gold-300 backdrop-blur">
                      {t.badge}
                    </Badge>
                  )}
                  <span
                    className={cn(
                      "absolute top-3 right-4 font-display text-xs tracking-[0.25em]",
                      t.artText
                    )}
                  >
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={cn(
                      "px-6 text-center font-display text-2xl font-bold",
                      t.artText
                    )}
                  >
                    {t.name}
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-cream-50">
                    {t.name}
                  </h3>
                  <p className="mt-1 min-h-[2.5rem] text-sm leading-relaxed text-cream-50/60 italic">
                    {t.tagline}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-gold-500/30 bg-transparent text-gold-300 hover:bg-gold-500 hover:text-ink-950"
                    render={
                      <a
                        href={themeDemoUrl(t.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Rasakan demo live →
                      </a>
                    }
                  />
                </div>
              </article>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-cream-50/50">
          Jatuh hati pada satu tema? Semuanya bisa disesuaikan dengan nama,
          foto, dan ceritamu.{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-300 underline-offset-4 hover:underline"
          >
            Chat kami →
          </a>
        </p>
      </div>
    </section>
  )
}
