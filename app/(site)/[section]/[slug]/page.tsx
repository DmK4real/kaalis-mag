import { sanity } from '@/lib/sanity'
import { getArticle } from '@/lib/queries'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'

type Props = { params: { section: string; slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await sanity.fetch(getArticle, { slug: params.slug })
  if (!data) return {}
  return {
    title: data.title,
    description: data.excerpt ?? undefined,
    openGraph: { images: data.coverImage ? [data.coverImage] : [] }
  }
}

export default async function ArticlePage({ params }: Props) {
  const data = await sanity.fetch(getArticle, { slug: params.slug })
  if (!data) return <div>Article introuvable.</div>

  return (
    <article className="prose prose-zinc max-w-3xl">
      {data.coverImage && (
        <div className="mb-6 -mx-4 sm:mx-0 overflow-hidden rounded-2xl">
          <Image src={data.coverImage} alt={data.title} width={1600} height={1066} />
        </div>
      )}
      <p className="text-xs uppercase tracking-wide text-zinc-600">{params.section}</p>
      <h1 className="font-display text-4xl mb-2">{data.title}</h1>
      {data.authorName && <p className="text-sm text-zinc-600">Par {data.authorName}</p>}
      <div className="mt-6">
        <PortableText value={data.body} />
      </div>
    </article>
  )
}
