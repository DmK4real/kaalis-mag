import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  excerpt?: string
  image: string
  href: string
  reverse?: boolean
  kicker?: string
}

export function SplitFeature({ title, excerpt, image, href, reverse, kicker }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className={`grid items-center gap-8 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div className="space-y-3">
          {kicker && (
            <span className="inline-block rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground uppercase tracking-wide">
              {kicker}
            </span>
          )}
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          {excerpt && <p className="text-muted-foreground">{excerpt}</p>}
          <Link href={href} className="inline-flex rounded-2xl bg-accent px-4 py-2 font-semibold text-white transition active:scale-[0.98] hover:opacity-90">
            Lire
          </Link>
        </div>
      </div>
    </section>
  )
}
