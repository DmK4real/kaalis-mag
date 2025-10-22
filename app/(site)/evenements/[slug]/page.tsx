import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { events, formatEventDate } from "../../../lib/events"
import { AddToCalendar } from "../../../components/add-to-calendar"


type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ev = events.find(e => e.slug === params.slug)
  if (!ev) return {}
  return {
    title: `${ev.title} — Kaalis`,
    description: ev.excerpt,
    openGraph: { images: ev.coverImage ? [ev.coverImage] : [] }
  }
}

export default function EventDetail({ params }: Props) {
  const ev = events.find(e => e.slug === params.slug)
  if (!ev) return <div>Événement introuvable.</div>

  const { date, hour, end } = formatEventDate(ev.date, ev.start, ev.end)
  const startISO = `${ev.date}T${ev.start ?? "00:00"}:00Z`
  const endISO = ev.end ? `${ev.date}T${ev.end}:00Z` : undefined

  return (
    <article className="prose prose-zinc max-w-3xl">
      <p className="text-xs uppercase tracking-wide text-zinc-600">Événement</p>
      <h1 className="font-display text-4xl mb-2">{ev.title}</h1>
      <p className="text-sm text-zinc-600">
        {date}{hour && ` — ${hour}${end ? ` → ${end}` : ""}`} {ev.location ? `• ${ev.location}` : ""}
      </p>

      {ev.coverImage && (
        <div className="mb-6 -mx-4 sm:mx-0 overflow-hidden rounded-2xl">
          <Image src={ev.coverImage} alt={ev.title} width={1600} height={1066} />
        </div>
      )}

      {ev.excerpt && <p>{ev.excerpt}</p>}

      <div className="not-prose mt-6 flex gap-2">
        <AddToCalendar
          title={ev.title}
          startISO={startISO}
          endISO={endISO}
          location={ev.location}
          description={ev.excerpt}
          filename={`${ev.slug}.ics`}
        />
        {ev.ticketsUrl && (
          <a
            href={ev.ticketsUrl}
            target="_blank"
            className="rounded-2xl bg-black px-3 py-1 text-sm text-white"
          >
            Billetterie
          </a>
        )}
        <Link href="/evenements" className="rounded-2xl border px-3 py-1 text-sm">
          ← Tous les événements
        </Link>
      </div>
    </article>
  )
}
