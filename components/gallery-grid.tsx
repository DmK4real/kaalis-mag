// components/gallery-grid.tsx
import Image from "next/image"

export type GalleryItem = { src: string; alt?: string }

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 *:mb-4">
      {items.map((g, i) => (
        <div key={i} className="break-inside-avoid">
          <Image
            src={g.src}
            alt={g.alt || `galerie-${i}`}
            width={1200}
            height={1600}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      ))}
    </div>
  )
}
