import { Hero } from "@/components/hero"
import { CardArticle } from "@/components/card-article"

const hero = {
  slug: "lancement-kaalis",
  title: "Kaalis, un nouveau regard sur la culture & le style",
  cover:
    "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop",
  category: "Culture",
  excerpt: "Manifeste, lignes éditoriales et prochains dossiers.",
}

const items: CardArticle[] = [
  {
    slug: "style-ss26",
    title: "Les silhouettes qui vont dominer SS26",
    category: "Style",
    cover:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1600&auto=format&fit=crop",
    date: "Oct 2025",
  },
  {
    slug: "lieux-abidjan",
    title: "5 lieux à (re)découvrir à Abidjan",
    category: "Lieux",
    cover:
      "https://images.unsplash.com/photo-1520975659191-46ad18acb7d8?q=80&w=1600&auto=format&fit=crop",
    date: "Oct 2025",
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4">
      <Hero item={hero} />

      <section className="rounded-2xl border bg-[hsl(var(--primary))]/6 p-6">
        <h2 className="section-title !text-[hsl(var(--primary))]">À la Une</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CardArticle key={item.slug} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}
