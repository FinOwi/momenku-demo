import { Ornament } from "@/components/undangen/ornament"
import { cn } from "@/lib/utils"

/**
 * A "breathing" interlude — one emotional line on a calm screen.
 * Alternating dense/breathing sections is what gives a page its rhythm,
 * like film cutting between close-ups and wide shots.
 */
export function Breathing({
  line,
  sub,
  tone = "dark",
}: {
  line: string
  sub?: string
  tone?: "dark" | "light"
}) {
  const dark = tone === "dark"
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 sm:py-36",
        dark ? "bg-ink-950" : "bg-cream-50"
      )}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Ornament className="mb-10" />
        <p
          className={cn(
            "font-display text-3xl leading-[1.35] font-medium text-balance italic sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-cream-50/90" : "text-ink-950/90"
          )}
        >
          {line}
        </p>
        {sub && (
          <p
            className={cn(
              "mx-auto mt-6 max-w-xl text-sm leading-relaxed sm:text-base",
              dark ? "text-cream-50/50" : "text-ink-950/50"
            )}
          >
            {sub}
          </p>
        )}
      </div>
    </section>
  )
}
