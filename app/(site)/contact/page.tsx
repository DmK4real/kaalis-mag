// app/(site)/contact/page.tsx
export const metadata = { title: "Contact — KAALIS" }

export default function Page() {
  return (
    <div className="mx-auto max-w-md px-4 py-8 space-y-6">
      <h1 className="section-title">Contact</h1>
      <form className="grid gap-4">
        <input className="rounded-xl border p-3" placeholder="Votre nom" required />
        <input className="rounded-xl border p-3" placeholder="Votre email" type="email" required />
        <textarea className="rounded-xl border p-3 min-h-32" placeholder="Votre message" required />
        <button className="rounded-2xl bg-accent px-4 py-2 font-semibold text-white hover:opacity-90">
          Envoyer
        </button>
      </form>
      <p className="text-sm text-muted-foreground">Ou écrivez-nous : contact@kaalis.mag (exemple)</p>
    </div>
  )
}
