import Link from 'next/link'
import { SectionTitle } from '@/components/section-title'

import { mockArticles } from '@/lib/mock'
import { paginate } from '@/lib/utils'
import { EditorialGrid } from "@/components/editorial-grid"
import type { CardArticle } from "@/components/card-article"

const data: CardArticle[] = Array.from({ length: 9 }).map((_, i) => ({
  slug: `style-${i+1}`,
  title: `Tendance #${i+1}`,
  category: "Style",
  cover: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1600&auto=format&fit=crop",
  date: "Oct 2025"
}))

export default function StylePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8">
      <h1 className="font-display text-3xl text-primary">Style</h1>
      <EditorialGrid items={data} />
    </div>
  )
}