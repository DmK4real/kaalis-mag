// components/editorial-grid.tsx
import { CardArticle, type CardArticle as CardData } from "@/components/card-article"

export function EditorialGrid({ items }: { items: CardData[] }) {
  return (
    <section aria-labelledby="section-derniers-articles">
      <h2 id="section-derniers-articles" className="mb-6 font-display text-3xl text-foreground">
        Derniers articles
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((a) => (
          <CardArticle key={a.slug} {...a} />
        ))}
      </div>
    </section>
  )
}
