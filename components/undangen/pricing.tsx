import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WA_LINK } from "@/data/site"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Basic",
    price: "Rp49rb",
    desc: "Untuk acara intim yang berkesan.",
    features: [
      "10 foto galeri",
      "1 tema pilihan",
      "RSVP & ucapan",
      "Countdown & peta lokasi",
      "Link nama tamu",
      "Aktif selamanya",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "Rp99rb",
    desc: "Paling dipilih pasangan.",
    features: [
      "20 foto galeri",
      "Semua fitur Basic",
      "Amplop digital",
      "Musik latar",
      "Dresscode & live streaming",
      "Aktif selamanya",
    ],
    highlight: true,
  },
  {
    name: "Eksklusif",
    price: "Rp199rb",
    desc: "Untuk momen sekali seumur hidup.",
    features: [
      "30 foto galeri",
      "Semua fitur Premium",
      "Tema interaktif & video",
      "Prioritas pengerjaan",
      "Revisi lebih fleksibel",
      "Aktif selamanya",
    ],
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="harga" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="border-gold-500/40 bg-gold-500/10 text-gold-300"
          >
            Harga
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl">
            Sekali bayar, <span className="text-gold-gradient">milik selamanya</span>
          </h2>
          <p className="text-cream-50/60">
            Tanpa langganan, tanpa biaya perpanjangan. Dibuatkan dulu — bayar
            setelah kamu cocok.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <Card
              key={p.name}
              className={cn(
                "relative flex flex-col border-cream-50/10 bg-ink-900",
                p.highlight &&
                  "border-gold-500/50 shadow-[0_0_60px_-15px_rgba(201,162,39,0.35)] lg:-my-3"
              )}
            >
              {p.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-ink-950">
                  Paling Dipilih
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-display text-xl text-cream-50">
                  {p.name}
                </CardTitle>
                <CardDescription className="text-cream-50/50">
                  {p.desc}
                </CardDescription>
                <p className="pt-3">
                  <span className="font-display text-4xl font-bold text-gold-300">
                    {p.price}
                  </span>
                  <span className="ml-2 text-sm text-cream-50/50">
                    sekali bayar
                  </span>
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-cream-50/75"
                    >
                      <span className="mt-0.5 text-gold-400">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={cn(
                    "w-full font-semibold",
                    p.highlight
                      ? "bg-gold-500 text-ink-950 hover:bg-gold-400"
                      : "border-gold-500/30 bg-transparent text-gold-300 hover:bg-gold-500 hover:text-ink-950"
                  )}
                  variant={p.highlight ? "default" : "outline"}
                  render={
                    <a
                      href={`${WA_LINK}%20Saya%20tertarik%20paket%20${p.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pilih {p.name}
                    </a>
                  }
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
