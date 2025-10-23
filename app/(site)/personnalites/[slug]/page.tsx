// app/(site)/personnalites/[slug]/page.tsx
import Image from "next/image"

const MOCK = {
  "amina-drame": {
    name: "Amina Dramé",
    role: "Directrice artistique",
    photo: "https://images.unsplash.com/photo-1520972230202-6b52f7a20a12?q=80&w=1600&auto=format&fit=crop",
    quote: "Créer des ponts entre scènes locales et regards mondiaux.",
    body: [
      "Amina Dramé explore les circulations esthétiques entre villes africaines et diasporas.",
      "Ses éditoriaux mêlent mode, design et récits urbains.",
    ],
  },
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = MOCK[params.slug as keyof typeof MOCK] ?? MOCK["amina-drame"]

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image src={p.photo} alt={p.name} width={1600} height={1000} className="h-[420px] w-full object-cover" />
      </div>
      <h1 className="font-display text-4xl">{p.name}</h1>
      {p.role && <p className="text-muted-foreground">{p.role}</p>}
      {p.quote && <blockquote className="mt-4 border-l-4 pl-4 italic text-lg">“{p.quote}”</blockquote>}
      <div className="prose mt-6">{p.body.map((x, i) => <p key={i}>{x}</p>)}</div>
    </article>
  )
}
