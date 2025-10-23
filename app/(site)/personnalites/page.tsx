// app/(site)/personnalites/page.tsx
import { PersonCard, type PersonItem } from "@/components/person-card"

const persons: PersonItem[] = [
  { slug:"amina-drame", name:"Amina Dramé", role:"Directrice artistique", photo:"https://images.unsplash.com/photo-1520972230202-6b52f7a20a12?q=80&w=1600&auto=format&fit=crop" },
  { slug:"sylvain-ade", name:"Sylvain Adé", role:"Photographe", photo:"https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=1600&auto=format&fit=crop" },
  { slug:"leila-b", name:"Leïla B.", role:"Curatrice", photo:"https://images.unsplash.com/photo-1514517220032-2a82d1400def?q=80&w=1600&auto=format&fit=crop" },
]

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8">
      <h1 className="section-title">Personnalités</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {persons.map((p) => (
          <PersonCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  )
}
