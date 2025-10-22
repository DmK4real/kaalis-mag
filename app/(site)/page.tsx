import { sanity } from '@/lib/sanity'
import { latestArticles } from '@/lib/queries'
import { SectionTitle } from '@/components/section-title'
import { ArticleCard } from '@/components/article-card'

export default async function Home() {
  const articles = await sanity.fetch(latestArticles)

  return (
    <div className="space-y-12">
      <section>
        <SectionTitle>À la une</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a: any) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-palm-500/5 p-8">
        <h3 className="font-display text-2xl">Newsletter</h3>
        <p className="mt-2 max-w-prose">
          Recevez chaque mois le meilleur de la scène d’Abidjan : lieux,
          portraits, sélections.
        </p>
        <form
          className="mt-4 flex gap-2"
          action="/api/newsletter"
          method="post"
        >
          <input
            className="flex-1 rounded-2xl border px-4 py-2"
            placeholder="Votre email"
            name="email"
            type="email"
            required
          />
          <button className="rounded-2xl bg-black px-5 py-2 text-white">
            S’inscrire
          </button>
        </form>
      </section>
    </div>
  )
}
