// app/(site)/categories/page.tsx
import type { KaalisCategory } from "@/components/categories-grid"
import { CategoriesGrid } from "@/components/categories-grid"

export const metadata = { title: "Catégories — KAALIS" }

const cats: KaalisCategory[] = [
  { slug: "culture", label: "Culture", description: "Arts, scènes, idées", tone: "terracotta" },
  { slug: "style", label: "Style", description: "Mode & tendances", tone: "ochre" },
  { slug: "personnalites", label: "Personnalités", description: "Portraits & interviews", tone: "olive" },
  { slug: "lieux", label: "Lieux", description: "Villes & adresses", tone: "ink" },
  { slug: "longreads", label: "Long Lire", description: "Dossiers, analyses", tone: "taupe" },
  { slug: "galerie", label: "Galerie", description: "Visuels & séries", tone: "ink" },
  { slug: "communaute", label: "Communauté", description: "Initiatives & réseaux", tone: "terracotta" },
  { slug: "agenda", label: "Agenda", description: "Événements & festivals", tone: "olive" },
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
