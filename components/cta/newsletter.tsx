"use client"

import { useState } from "react"

export function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <section className="mx-auto max-w-4xl rounded-2xl border bg-muted/30 p-6 text-center">
      <h3 className="mb-2 font-display text-2xl">Recevoir Kaalis</h3>
      <p className="mx-auto mb-4 max-w-xl text-muted-foreground">
        Sélection d’articles, dossiers et agenda culturel, deux fois par mois.
      </p>

      {sent ? (
        <p className="text-sm text-foreground">Merci ! Vérifie ta boîte email 👋</p>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mx-auto flex max-w-md gap-2"
        >
          <input
            type="email"
            required
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          />
          <button className="rounded-xl bg-foreground px-4 py-2 font-semibold text-background transition active:scale-[0.98] hover:opacity-90">
            S’inscrire
          </button>
        </form>
      )}
    </section>
  )
}
