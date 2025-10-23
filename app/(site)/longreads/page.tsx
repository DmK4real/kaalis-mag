// app/(site)/longreads/page.tsx
import { EditorialGrid } from "@/components/editorial-grid"
import type { CardArticle } from "@/components/card-article"

const items: CardArticle[] = [
  { slug:"cartographier-scenes", title:"Cartographier les scènes créatives", category:"Long Lire",
    cover:"https://images.unsplash.com/photo-1516924962500-2b4b3b3c4f83?q=80&w=1600&auto=format&fit=crop", date:"2025" },
  { slug:"nouveaux-rituels", title:"Nouveaux rituels — corps & vêtements", category:"Long Lire",
    cover:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop", date:"2025" },
  { slug:"ecologies-urbaines", title:"Écologies urbaines — villes en mouvement", category:"Long Lire",
    cover:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop", date:"2025" },
]

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8">
      <h1 className="section-title">Long Lire</h1>
      <EditorialGrid items={items} />
    </div>
  )
}
