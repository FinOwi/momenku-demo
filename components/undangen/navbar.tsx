"use client"

import { Button } from "@/components/ui/button"
import { WA_LINK } from "@/data/site"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const LINKS = [
  { label: "Tema", href: "#tema" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-shimmer font-display text-lg font-bold text-ink-950">
            U
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-cream-50">
            Undangen
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream-50/70 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Button
          size="sm"
          className="bg-gold-500 font-semibold text-ink-950 hover:bg-gold-400"
          render={
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          }
        />
      </nav>
    </header>
  )
}
