import Image from "next/image"
import Link from "next/link"

export function Hero({ item }: { item: any }) {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      <Image
        src={item.cover}
        alt={item.title}
        width={1600}
        height={900}
        priority
        className="h-[480px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/35 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
        <span className="kicker">{item.category}</span>
        <h1 className="mt-2 font-display text-3xl md:text-4xl">{item.title}</h1>
        {item.excerpt && (
          <p className="mt-2 max-w-2xl text-sm text-background/90">
            {item.excerpt}
          </p>
        )}
        <Link
          href={`/articles/${item.slug}`}
          className="mt-4 inline-block rounded-2xl bg-[hsl(var(--primary))] px-5 py-2 font-semibold text-background transition hover:opacity-90"
        >
          Lire
        </Link>
      </div>
    </section>
  )
}
