export interface Theme {
  slug: string
  name: string
  tagline: string
  /** tailwind gradient classes for the card art */
  art: string
  /** overlay text color class */
  artText: string
  badge?: string
}

export const THEMES: Theme[] = [
  {
    slug: "modern-elegan",
    name: "Modern Elegan",
    tagline: "Kemewahan yang tenang, dengan aksen emas yang pas",
    art: "from-stone-100 via-amber-50 to-stone-200",
    artText: "text-stone-800",
    badge: "Terlaris",
  },
  {
    slug: "candi-3d",
    name: "Candi 3D",
    tagline: "Borobudur berparallax, debu emas beterbangan",
    art: "from-amber-200 via-orange-100 to-stone-300",
    artText: "text-stone-800",
    badge: "Interaktif",
  },
  {
    slug: "kamar-interaktif",
    name: "Kamar Interaktif",
    tagline: "Sebuah ruangan, tujuh kejutan menunggu dijelajahi",
    art: "from-orange-200 via-amber-100 to-rose-100",
    artText: "text-stone-800",
    badge: "Interaktif",
  },
  {
    slug: "sinema",
    name: "Sinema",
    tagline: "Undangan yang dibuka seperti film di bioskop",
    art: "from-neutral-900 via-red-950 to-neutral-900",
    artText: "text-amber-100",
    badge: "Video",
  },
  {
    slug: "pixel-quest",
    name: "Pixel Quest",
    tagline: "Misi 16-bit: selamatkan hari bahagia",
    art: "from-emerald-400 via-green-300 to-lime-200",
    artText: "text-emerald-950",
    badge: "Game",
  },
  {
    slug: "koran-vintage",
    name: "Koran Vintage",
    tagline: "Kabar bahagia, diketik bagai headline tahun 1950",
    art: "from-amber-100 via-yellow-50 to-stone-200",
    artText: "text-stone-800",
  },
  {
    slug: "boarding-pass",
    name: "Boarding Pass",
    tagline: "Boarding menuju hari yang paling dinanti",
    art: "from-sky-200 via-blue-100 to-cyan-100",
    artText: "text-sky-950",
  },
  {
    slug: "gothic-romance",
    name: "Gothic Romance",
    tagline: "Cinta yang menyala di antara bara dan lilin",
    art: "from-neutral-950 via-red-950 to-neutral-900",
    artText: "text-red-100",
  },
  {
    slug: "adat-jawa",
    name: "Ageng Jawa",
    tagline: "Kemegahan pengantin Jawa, penuh tata krama",
    art: "from-red-900 via-red-800 to-amber-700",
    artText: "text-amber-100",
  },
  {
    slug: "adat-batak",
    name: "Ulos Heritage",
    tagline: "Hangatnya ulos, tenunan doa keluarga Batak",
    art: "from-red-950 via-rose-900 to-neutral-900",
    artText: "text-rose-100",
  },
  {
    slug: "islami",
    name: "Barakah Islami",
    tagline: "Keteduhan doa dalam bingkai yang Islami",
    art: "from-emerald-800 via-teal-700 to-emerald-600",
    artText: "text-emerald-50",
  },
  {
    slug: "royal",
    name: "Noir Royal",
    tagline: "Hitam pekat dan ungu royal — misteri yang elegan",
    art: "from-neutral-950 via-purple-950 to-neutral-900",
    artText: "text-purple-100",
  },
  {
    slug: "gatsby",
    name: "Gatsby Gold",
    tagline: "Gemilang pesta art deco ala tahun 1920-an",
    art: "from-neutral-900 via-amber-950 to-neutral-900",
    artText: "text-amber-200",
  },
  {
    slug: "floral",
    name: "Floral Romance",
    tagline: "Taman bunga yang mekar untuk dua hati",
    art: "from-rose-100 via-pink-50 to-rose-200",
    artText: "text-rose-900",
  },
  {
    slug: "sakura",
    name: "Sakura",
    tagline: "Kelopak sakura menari di musim semi cintamu",
    art: "from-pink-100 via-rose-50 to-pink-200",
    artText: "text-pink-900",
  },
  {
    slug: "samudra",
    name: "Samudra",
    tagline: "Sedalam samudra, setenang birunya",
    art: "from-blue-800 via-cyan-700 to-blue-600",
    artText: "text-cyan-50",
  },
  {
    slug: "aurora",
    name: "Aurora",
    tagline: "Cahaya utara menari untuk malam istimewa",
    art: "from-teal-400 via-emerald-300 to-purple-300",
    artText: "text-teal-950",
  },
  {
    slug: "galaksi",
    name: "Galaksi",
    tagline: "Di antara bintang-bintang, tertulis namamu",
    art: "from-indigo-950 via-purple-900 to-indigo-800",
    artText: "text-indigo-100",
  },
  {
    slug: "neon-night",
    name: "Neon Night",
    tagline: "Neon cyberpunk untuk pesta tanpa henti",
    art: "from-neutral-950 via-fuchsia-950 to-cyan-950",
    artText: "text-fuchsia-200",
  },
  {
    slug: "minimalis",
    name: "Putih Bersih",
    tagline: "Keheningan putih, tanpa satu distraksi pun",
    art: "from-white via-stone-50 to-stone-100",
    artText: "text-stone-700",
  },
  {
    slug: "rustic",
    name: "Kebun Rustic",
    tagline: "Hangatnya pesta kebun di pedesaan",
    art: "from-lime-100 via-green-50 to-amber-100",
    artText: "text-green-900",
  },
]

export const WA_NUMBER = "6288279406268"
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Undangen!%20Saya%20mau%20pesan%20undangan%20digital.`

export function themeDemoUrl(slug: string) {
  return `https://undangen.my.id/tema/${slug}/`
}
