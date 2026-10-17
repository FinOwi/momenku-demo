import { cn } from "@/lib/utils"

/** Small gold ornament divider — a quiet craft signature between sections. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-4", className)}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/70 sm:w-24" />
      <span className="text-sm text-gold-500">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/70 sm:w-24" />
    </div>
  )
}
