// app/(site)/galerie/page.tsx
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid"

const items: GalleryItem[] = [
  { src:"https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop" },
  { src:"https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1600&auto=format&fit=crop" },
  { src:"https://images.unsplash.com/photo-1520975659191-46ad18acb7d8?q=80&w=1600&auto=format&fit=crop" },
  { src:"https://images.unsplash.com/photo-1520972230202-6b52f7a20a12?q=80&w=1600&auto=format&fit=crop" },
  { src:"https://images.unsplash.com/photo-1516924962500-2b4b3b3c4f83?q=80&w=1600&auto=format&fit=crop" },
  { src:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop" },
]

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8">
      <h1 className="section-title">Galerie</h1>
      <GalleryGrid items={items} />
    </div>
  )
}
