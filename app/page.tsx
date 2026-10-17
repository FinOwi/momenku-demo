import { Navbar } from "@/components/undangen/navbar"
import { Hero } from "@/components/undangen/hero"
import { Marquee } from "@/components/undangen/marquee"
import { Breathing } from "@/components/undangen/breathing"
import { Themes } from "@/components/undangen/themes"
import { Ritual } from "@/components/undangen/ritual"
import { Steps } from "@/components/undangen/steps"
import { Pricing } from "@/components/undangen/pricing"
import { Faq } from "@/components/undangen/faq"
import { FinalCta, Footer } from "@/components/undangen/cta-footer"
import { Grain } from "@/components/undangen/grain"

export default function Page() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Breathing line="Sebelum tamu tiba di hari bahagiamu, mereka tiba dulu di undanganmu." />
        <Themes />
        <Ritual />
        <Steps />
        <Pricing />
        <Faq />
        <Breathing
          line="Kenanganmu tak punya tanggal kedaluwarsa. Undanganmu pun begitu."
          tone="light"
        />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
