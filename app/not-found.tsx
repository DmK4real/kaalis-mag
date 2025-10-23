// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center space-y-4">
      <h1 className="font-display text-5xl">404</h1>
      <p className="text-muted-foreground">La page que vous cherchez n’existe pas.</p>
      <Link href="/" className="inline-flex items-center rounded-2xl bg-accent px-4 py-2 font-semibold text-white hover:opacity-90">
        Retour à l’accueil
      </Link>
    </div>
  )
}
