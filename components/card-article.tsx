import Image from "next/image"
import Link from "next/link"

const catColor: Record<string, string> = {
  Culture: "ka-culture",
  Style: "ka-style",
  Lieux: "ka-lieux",
  Personnalités: "ka-perso",
  Agenda: "ka-agenda",
}

export type CardArticle = {
  slug: string
  title: string
  cover: string
  category: string
  date?: string
}

export function CardArticle({ slug, title, cover, category, date }: CardArticle) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="group block overflow-hidden rounded-2xl border transition hover:shadow-lg"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={cover}
          alt={title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-[hsl(var(--${catColor[category] ?? "ka-info"}))]`}
        >
          {category}
        </span>
        <h3 className="mt-2 font-display text-lg text-foreground group-hover:text-[hsl(var(--primary))]">
          {title}
        </h3>
        {date && <p className="text-sm text-muted-foreground">{date}</p>}
      </div>
    </Link>
  )
}
