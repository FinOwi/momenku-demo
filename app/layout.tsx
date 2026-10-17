import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Undangen — Undangan Digital Premium",
  description:
    "Undangen (“undangan” dalam bahasa Karo): undangan digital premium untuk pernikahan, aqiqah, khitanan, ulang tahun, wisuda, dan acara korporat. 21 tema eksklusif, aktif selamanya, dibuatkan dulu bayar setelah cocok.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased",
          display.variable,
          sans.variable,
          "font-sans"
        )}
      >
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
