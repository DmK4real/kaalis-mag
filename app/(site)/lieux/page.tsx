import { sanity } from '@/lib/sanity'
import { listBySection } from '@/lib/queries'
import { SectionTitle } from '@/components/section-title'
import { ArticleCard } from '@/components/card-article'

export default async function StylePage() {
  const articles = await sanity.fetch(listBySection('style'))
  return (
    <div>
      <SectionTitle>Lieux</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a: any) => <ArticleCard key={a.slug} article={a} />)}
      </div>
    </div>
  )
}
