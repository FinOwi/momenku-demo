import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    q: "Benarkah aktif selamanya?",
    a: "Ya. Sekali bayar, undanganmu tetap online selamanya tanpa biaya perpanjangan tahunan.",
  },
  {
    q: "Bagaimana sistem 'bayar setelah cocok'?",
    a: "Kami buatkan dulu undanganmu sesuai data yang kamu kirim. Kamu cek drafnya — kalau cocok baru bayar, kalau tidak cocok tidak perlu bayar.",
  },
  {
    q: "Acara apa saja yang bisa dibuatkan?",
    a: "Pernikahan, aqiqah, khitanan, ulang tahun, wisuda, syukuran, pertunangan, hingga acara korporat. Satu brand untuk semua momen bahagia.",
  },
  {
    q: "Apakah bisa revisi?",
    a: "Bisa. Selama tahap draf, kamu boleh minta penyesuaian nama, tanggal, foto, dan teks hingga sesuai keinginanmu.",
  },
  {
    q: "Bagaimana tamu membuka undangan?",
    a: "Cukup satu link. Setiap tamu bahkan bisa dapat link personal dengan namanya sendiri, contoh: undangen.my.id/namamu/?to=Nama+Tamu.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Umumnya 1–3 hari kerja setelah data lengkap kami terima, tergantung antrean dan paket yang dipilih.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-cream-50 py-20 text-ink-950 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="border-gold-600/40 bg-gold-500/10 text-gold-700"
          >
            FAQ
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Sering ditanyakan
          </h2>
        </div>
        <Accordion className="mt-10">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-ink-950/65">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
