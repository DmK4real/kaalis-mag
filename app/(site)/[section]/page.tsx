// app/(site)/[section]/page.tsx
import { EditorialGrid } from "@/components/editorial-grid"
import type { CardArticle } from "@/components/card-article"
import { StickyCategoryTabs } from "@/components/ui/sticky-category-tabs"

const MOCK: Record<string, { title: string; items: CardArticle[] }> = {
  culture: {
    title: "Culture",
    items: [
      { slug:"expo-kin", title:"Biennale de Kinshasa : l’édition qui bouscule", category:"Culture",
        cover:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop", date:"Sep 2025" },
      { slug:"musique-lagos", title:"Lagos : le laboratoire des nouveaux sons", category:"Culture",
        cover:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop", date:"Sep 2025" },
      { slug:"cinema-marrakech", title:"Marrakech : une école du cinéma en ville", category:"Culture",
        cover:"https://images.unsplash.com/photo-1553456558-aff63285bdd1?q=80&w=1600&auto=format&fit=crop", date:"Sep 2025" },
    ],
  },
  style: {
    title: "Style",
    items: [
      { slug:"capsule-abidjan", title:"Capsule Abidjan — silhouettes & matières", category:"Style",
        cover:"https://images.unsplash.com/photo-1520975659191-46ad18acb7d8?q=80&w=1600&auto=format&fit=crop", date:"Oct 2025" },
      { slug:"made-in-africa", title:"Made in Africa : ateliers & maison", category:"Style",
        cover:"https://images.unsplash.com/photo-1542332213-0e4c2e0d3ad0?q=80&w=1600&auto=format&fit=crop", date:"Oct 2025" },
      { slug:"editorial-ss26", title:"Éditorial SS26 — textures & coupes", category:"Style",
        cover:"https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1600&auto=format&fit=crop", date:"Oct 2025" },
    ],
  },
}

export default function Page({ params }: { params: { section: string } }) {
  const key = params.section
  const data = MOCK[key] ?? { title: key, items: [] }

  return (
    <>
      <StickyCategoryTabs />
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <h1 className="section-title">{data.title}</h1>
        <EditorialGrid items={data.items} />
      </div>
    </>
  )
}