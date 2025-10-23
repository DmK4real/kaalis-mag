// components/event-card.tsx
import Link from "next/link"

export type EventItem = {
  slug: string
  title: string
  date: string   // "12 janv 2026"
  city?: string
  venue?: string
  category?: string
}

export function EventCard({ ev }: { ev: EventItem }) {
  return (
    <article className="rounded-2xl border p-4 hover:bg-muted/40 transition">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center rounded-full border px-2 py-0.5">
          {ev.date}
        </span>
        {ev.city && <span>{ev.city}</span>}
        {ev.venue && <span>· {ev.venue}</span>}
      </div>
      <h3 className="mt-2 text-xl font-semibold leading-snug">
        <Link href={`/agenda/${ev.slug}`} className="hover:underline">
          {ev.title}
        </Link>
      </h3>
      {ev.category && <p className="text-sm text-muted-foreground mt-1">{ev.category}</p>}
    </article>
  )
}
