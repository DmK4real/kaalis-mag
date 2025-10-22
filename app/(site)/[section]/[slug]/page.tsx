import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { mockArticles } from '@/lib/mock'

type Props = { params: { section: string; slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = mockArticles.find(a => a.slug === params.slug && a.section === params.section)
  if (!article) return {}
  return {
    title: `${article.title} — Kaalis`,
    description: article.excerpt,
    openGraph: { images: article.coverImage ? [article.coverImage] : [] },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug && a.section === params.section)
  if (!article) return <div>Article introuvable.</div>

  const related = mockArticles
    .filter(a => a.section === article.section && a.slug !== article.slug)
    .slice(0, 3)

  return (
    <article className="prose prose-zinc max-w-3xl">
      <p className="text-xs uppercase tracking-wide text-zinc-600">{params.section}</p>
      <h1 className="font-display text-4xl mb-2">{article.title}</h1>
      <p className="text-sm text-zinc-600">
        {article.author ? `Par ${article.author}` : 'Rédaction'} · {article.publishedAt ?? ''}
      </p>

      {article.coverImage && (
        <div className="mb-6 -mx-4 sm:mx-0 overflow-hidden rounded-2xl">
          <Image src={article.coverImage} alt={article.title} width={1600} height={1066} />
        </div>
      )}

      {article.body?.map((p, i) => <p key={i}>{p}</p>)}

      {/* Partage simple */}
      <div className="not-prose mt-8 flex gap-2">
        <a className="rounded-2xl border px-3 py-1 text-sm"
           href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent('https://exemple.com/'+article.section+'/'+article.slug)}`}
           target="_blank">Partager X</a>
        <a className="rounded-2xl border px-3 py-1 text-sm"
           href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://exemple.com/'+article.section+'/'+article.slug)}`}
           target="_blank">Facebook</a>
      </div>

      {/* Liens relatifs */}
      {related.length > 0 && (
        <div className="not-prose mt-10">
          <h3 className="font-display text-2xl mb-4">À lire aussi</h3>
          <ul className="space-y-2">
            {related.map(r => (
              <li key={r.slug}>
                <Link href={`/${r.section}/${r.slug}`} className="underline">{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
