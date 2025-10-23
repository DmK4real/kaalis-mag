import Image from "next/image"
import Link from "next/link"

export default function NumeroPage({ params }: { params: { slug: string } }) {
  const issue = {
    title: `Numéro — ${params.slug}`,
    cover: "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop",
    editorial: "Manifeste, lignes éditoriales et dossiers phares…",
    sections: [
      { title: "Culture", href: "/culture", items: 12 },
      { title: "Style", href: "/style", items: 9 },
      { title: "Personnalités", href: "/personnalites", items: 6 },
    ],
  }

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={issue.cover}
          alt={issue.title}
          width={1600}
          height={1000}
          className="h-[420px] w-full object-cover"
          priority
        />
      </div>
      <header className="space-y-3">
        <h1 className="section-title">{issue.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{issue.editorial}</p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {issue.sections.map((s) => (
          <Link key={s.title} href={s.href} className="rounded-2xl border p-5 transition hover:bg-muted">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{s.title}</h3>
              <span className="text-sm text-muted-foreground">{s.items} articles</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
