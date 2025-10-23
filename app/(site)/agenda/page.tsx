// app/(site)/agenda/page.tsx
import { EventCard, type EventItem } from "@/components/event-card"

const events: EventItem[] = [
  { slug:"dakart-2026", title:"Dak’Art — Biennale de Dakar", date:"Mai 2026", city:"Dakar", venue:"Divers lieux", category:"Arts visuels" },
  { slug:"abidjan-musiques", title:"Abidjan — Nuits musicales", date:"Juin 2026", city:"Abidjan", venue:"Institut", category:"Musique" },
  { slug:"lagos-fashion", title:"Lagos Fashion Days", date:"Juillet 2026", city:"Lagos", venue:"Front de mer", category:"Mode" },
]

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8 animate-pulse">
      {/* hero */}
      <div className="h-[460px] w-full rounded-2xl bg-muted" />
      {/* grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="grid gap-3">
            <div className="h-64 w-full rounded-2xl bg-muted" />
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-6 w-3/4 rounded bg-muted" />
            <div className="h-3 w-2/3 rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
