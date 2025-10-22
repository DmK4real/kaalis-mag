import Image from 'next/image'
import Link from 'next/link'

type Article = {
  title: string
  slug: string
  excerpt?: string
  coverImage?: string
  section?: string
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/${article.section ?? 'articles'}/${article.slug}`} className="group">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        {article.coverImage && (
          <Image src={article.coverImage} alt={article.title} width={1200} height={800}
            className="h-56 w-full object-cover transition-transform group-hover:scale-105" />
        )}
        <div className="p-4">
          {article.section && <div className="text-xs uppercase tracking-wide text-zinc-600">{article.section}</div>}
          <h3 className="mt-1 font-display text-xl">{article.title}</h3>
          {article.excerpt && <p className="mt-2 text-sm text-zinc-700 line-clamp-2">{article.excerpt}</p>}
        </div>
      </div>
    </Link>
  )
}
