import Link from 'next/link'
import { SectionTitle } from '@/components/section-title'
import { ArticleCard } from '@/components/article-card'
import { mockArticles } from '@/lib/mock'
import { paginate } from '@/lib/utils'

export default function StylePage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page ?? '1')
  const perPage = 6
  const all = mockArticles.filter(a => a.section === 'style')
  const { items, pages, current } = paginate(all, page, perPage)

  return (
    <div>
      <SectionTitle>Style</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(a => <ArticleCard key={a.slug} article={a as any} />)}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center gap-2">
        <Link
          href={`/style?page=${Math.max(1, current - 1)}`}
          className="rounded-2xl border px-3 py-1 text-sm disabled:opacity-50"
          aria-disabled={current === 1}
        >
          ← Précédent
        </Link>
        <span className="text-sm">Page {current} / {pages}</span>
        <Link
          href={`/style?page=${Math.min(pages, current + 1)}`}
          className="rounded-2xl border px-3 py-1 text-sm disabled:opacity-50"
          aria-disabled={current === pages}
        >
          Suivant →
        </Link>
      </div>
    </div>
  )
}
