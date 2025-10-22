"use client"

type Props = {
  title: string
  startISO: string   // ex: "2025-11-08T18:00:00Z"
  endISO?: string
  location?: string
  description?: string
  filename?: string
}

export function AddToCalendar({ title, startISO, endISO, location, description, filename = "event.ics" }: Props) {
  function handleClick() {
    const uid = `${Date.now()}@kaalis`
    const dtStart = startISO.replace(/[-:]/g, "").replace(".000", "")
    const dtEnd = (endISO ?? startISO).replace(/[-:]/g, "").replace(".000", "")
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Kaalis//Events//FR",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${dtStart}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeICS(title)}`,
      location ? `LOCATION:${escapeICS(location)}` : "",
      description ? `DESCRIPTION:${escapeICS(description)}` : "",
      "END:VEVENT",
      "END:VCALENDAR"
    ].filter(Boolean).join("\r\n")

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleClick} className="rounded-2xl border px-3 py-1 text-sm">
      Ajouter au calendrier
    </button>
  )
}

function escapeICS(s: string) {
  return s.replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n")
}
