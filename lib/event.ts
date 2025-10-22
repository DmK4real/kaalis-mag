// lib/events.ts
export type EventItem = {
  title: string
  slug: string
  date: string
  start?: string
  end?: string
  location?: string
  coverImage?: string
  excerpt?: string
  price?: string
  ticketsUrl?: string
}

export const events: EventItem[] = [
  {
    title: "Kaalis Soirée — Lancement magazine",
    slug: "kaalis-soiree-lancement",
    date: "2025-11-08",
    start: "18:00",
    end: "23:30",
    location: "Biétry, Abidjan",
    coverImage: "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Musique, rencontres, cocktails — on fête le lancement de Kaalis.",
    price: "Entrée libre",
  },
  {
    title: "Marché créatif — Designers locaux",
    slug: "marche-creatif-designers-locaux",
    date: "2025-11-15",
    start: "10:00",
    end: "18:00",
    location: "Plateau, Abidjan",
    coverImage: "https://images.unsplash.com/photo-1520975659191-46ad18acb7d8?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Sélection de marques mode & déco — édition spéciale.",
    price: "2 000 FCFA",
    ticketsUrl: "https://exemple.com/billets/marche-creatif"
  },
  {
    title: "Projection plein air — Ciné lagunaire",
    slug: "projection-plein-air-cine-lagunaire",
    date: "2025-10-30",
    start: "19:30",
    location: "Cocody, Riviera",
    coverImage: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Cinéma en plein air, plaid recommandé 😉",
    price: "5 000 FCFA",
  },
]

export function formatEventDate(iso: string, start?: string, end?: string) {
  const tz = "Africa/Abidjan"
  const d = new Date(`${iso}T${start ?? "00:00"}:00Z`)
  const date = new Intl.DateTimeFormat("fr-FR", { timeZone: tz, weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(d)
  const hour = start ? new Intl.DateTimeFormat("fr-FR", { timeZone: tz, hour: "2-digit", minute: "2-digit" }).format(d) : null
  let endStr: string | null = null
  if (end) {
    const e = new Date(`${iso}T${end}:00Z`)
    endStr = new Intl.DateTimeFormat("fr-FR", { timeZone: tz, hour: "2-digit", minute: "2-digit" }).format(e)
  }
  return { date, hour, end: endStr }
}

export function isFuture(iso: string) {
  const today = new Date()
  const d = new Date(`${iso}T00:00:00Z`)
  return d >= new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
}
