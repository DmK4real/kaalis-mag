// app/(site)/a-propos/page.tsx
export const metadata = { title: "À propos — KAALIS" }

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
      <h1 className="section-title">À propos</h1>
      <p className="text-lg">KAALIS est un magazine visuel et analytique, dédié aux scènes culturelles et stylistiques d’Afrique et de ses diasporas.</p>
      <p>Manifeste, valeurs éditoriales, équipe — ce que nous cherchons : raconter autrement, relier les villes, révéler les talents.</p>
    </div>
  )
}
