// components/categories-grid.tsx
import Link from "next/link"

export type KaalisCategory = {
  slug: string
  label: string
  description?: string
  tone?: "terracotta" | "ochre" | "olive" | "ink" | "taupe"
}

const bg: Record<NonNullable<KaalisCategory["tone"]>, string> = {
  terracotta: "bg-terracotta",
  ochre: "bg-ochre",
  olive: "bg-olive",
  ink: "bg-ink",
  taupe: "bg-taupe",
}

export function CategoriesGrid({ cats }: { cats: KaalisCategory[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cats.map((c) => (
        <Link
          key={c.slug}
          href={`/${c.slug}`}
          className={`cat ${c.tone ? bg[c.tone] : "bg-ink"} hover:opacity-95`}
        >
          {c.label}
          {c.description && <small>{c.description}</small>}
        </Link>
      ))}
    </div>
  )
}
