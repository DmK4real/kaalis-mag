// app/(site)/communaute/page.tsx
export const metadata = { title: "Communauté — KAALIS" }

export default function Page() {
  const items = [
    { title:"Réseau KAALIS", text:"Rencontres trimestrielles dans plusieurs villes." },
    { title:"Appels à contributions", text:"Photographes, auteur·es, artistes : proposez vos sujets." },
    { title:"Bénévolat / Partenariats", text:"Soutenir des projets, des ateliers, des festivals." },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 space-y-8">
      <h1 className="section-title">Communauté</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((x, i) => (
          <div key={i} className="rounded-2xl border p-5">
            <h3 className="text-xl font-semibold">{x.title}</h3>
            <p className="text-muted-foreground mt-2">{x.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
