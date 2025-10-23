// components/person-card.tsx
import Image from "next/image"
import Link from "next/link"

export type PersonItem = {
  slug: string
  name: string
  role?: string
  photo: string
}

export function PersonCard({ p }: { p: PersonItem }) {
  return (
    <article className="grid gap-3">
      <Link href={`/personnalites/${p.slug}`} className="block overflow-hidden rounded-2xl">
        <Image
          src={p.photo}
          alt={p.name}
          width={1000}
          height={1200}
          className="h-80 w-full object-cover transition-transform hover:scale-[1.02]"
        />
      </Link>
      <h3 className="text-xl font-semibold leading-snug">
        <Link href={`/personnalites/${p.slug}`} className="hover:underline">{p.name}</Link>
      </h3>
      {p.role && <p className="text-sm text-muted-foreground">{p.role}</p>}
    </article>
  )
}
