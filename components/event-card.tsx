import Image from "next/image"
import Link from "next/link"
import { EventItem, formatEventDate } from "@/lib/events"

export function EventCard({ ev }: { ev: EventItem }) {
  const { date, hour, end } = formatEventDate(ev.date, ev.start, ev.end)
  return (
    <Link href={`/evenements/${ev.slug}`} className="group">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        {ev.coverImage && (
          <Image
            src={ev.coverImage}
            alt={ev.title}
            width={1200}
            height={800}
            className="h-56 w-full object-cover transition-transform group-hover:scale-105"
          />
        )}
        <div className="p-4">
          <div className="text-xs uppercase tracking-wide text-zinc-600">Événement</div>
          <h3 className="mt-1 font-display text-xl">{ev.title}</h3>
          <p className="mt-1 text-sm text-zinc-700">
            {date}{hour && ` — ${hour}${end ? ` → ${end}` : ""}`} {ev.location ? `• ${ev.location}` : ""}
          </p>
          {ev.excerpt && <p className="mt-2 text-sm text-zinc-700 line-clamp-2">{ev.excerpt}</p>}
          {ev.price && <span className="mt-3 inline-block rounded-2xl bg-zinc-100 px-3 py-1 text-xs">{ev.price}</span>}
        </div>
      </div>
    </Link>
  )
}
