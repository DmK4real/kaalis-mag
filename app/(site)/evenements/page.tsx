// app/(site)/evenements/page.tsx
import { SectionTitle } from "../../components/section-title"
import { EventCard } from "../../components/event-card"
import { events, isFuture } from "../../lib/events"


export default function EventsPage() {
  const upcoming = events
    .filter(e => isFuture(e.date))
    .sort((a, b) => a.date.localeCompare(b.date))

  const past = events
    .filter(e => !isFuture(e.date))
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="space-y-12">
      <section>
        <SectionTitle>À venir</SectionTitle>
        {upcoming.length === 0 ? (
          <p className="text-zinc-700">Rien à l’agenda pour le moment — revenez bientôt.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map(ev => <EventCard key={ev.slug} ev={ev} />)}
          </div>
        )}
      </section>

      <section>
        <SectionTitle>Passés</SectionTitle>
        {past.length === 0 ? (
          <p className="text-zinc-700">Aucun événement passé pour l’instant.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map(ev => <EventCard key={ev.slug} ev={ev} />)}
          </div>
        )}
      </section>
    </div>
  )
}
