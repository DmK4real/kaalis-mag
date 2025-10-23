// app/(site)/articles/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { NewsletterCTA } from "@/components/cta/newsletter"
import { JSX } from "react/jsx-dev-runtime"

// ——— Mock minimal pour afficher quelque chose en attendant Sanity/DB ———
const MOCK: Record<
  string,
  {
    title: string
    cover: string
    category?: string
    date?: string
    body: JSX.Element
  }
> = {
  "lancement-kaalis": {
    title: "Kaalis, un nouveau regard sur la culture & le style",
    cover:
      "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop",
    category: "Culture",
    date: "Oct 2025",
    body: (
      <>
        <p>
          Bienvenue sur KAALIS. Ce numéro pose nos lignes éditoriales, nos
          partis-pris sur la culture, le style, les scènes et les lieux.
        </p>
        <h2>Manifeste</h2>
        <p>
          Donner de la profondeur aux sujets, révéler les acteurs, capturer les
          mouvements de fond. Ni snobisme, ni sensationnalisme — de l’exigence.
        </p>
        <p>
          Bientôt&nbsp;: dossiers longs, portraits, agenda culturel et guides
          de lieux.
        </p>
      </>
    ),
  },
}

// ——— Page composant ———
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a =
    MOCK[params.slug] ??
    ({
      title: "Article",
      cover:
        "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1600&auto=format&fit=crop",
      category: "Culture",
      date: "—",
      body: <p>Contenu à venir.</p>,
    } as const)

  return (
    <article className="prose prose-zinc mx-auto max-w-3xl px-4 prose-img:rounded-2xl">
      {/* Header article (cover + meta) */}
      <div className="not-prose mb-6 overflow-hidden rounded-2xl">
        <Image
          src={a.cover}
          alt={a.title}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-[360px] w-full object-cover"
          priority
        />
      </div>

      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        {a.category && (
          <Link
            href={`/${a.category.toLowerCase()}`}
            className="rounded-full border px-2 py-0.5"
          >
            {a.category}
          </Link>
        )}
        {a.date && <span>• {a.date}</span>}
      </div>

      <h1 className="mb-4 font-display text-3xl text-foreground md:text-4xl">
        {a.title}
      </h1>

      {/* Corps de l’article */}
      {a.body}

      {/* CTA newsletter en bas d’article */}
      <div className="not-prose my-12">
        <NewsletterCTA />
      </div>
    </article>
  )
}
