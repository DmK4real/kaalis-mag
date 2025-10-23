import { sanity } from '@/lib/sanity'
import { listBySection } from '@/lib/queries'
import { SectionTitle } from '@/components/section-title'
import { CardArticle } from '@/components/card-article'

export default async function StylePage() {
  const articles = await sanity.fetch(listBySection('style'))
  return (
    <div>
      <SectionTitle>Articles</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a: any) => <CardArticle key={a.slug}  {...a} />)}
      </div>
    </div>
  )
}
