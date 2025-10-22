# Kaalis Magazine — Starter

Projet Next.js + Tailwind prêt pour brancher un CMS Sanity.

## Lancer en local
```bash
# 1) Installer les dépendances
npm install

# 2) Démarrer
npm run dev
```

## Config Tailwind
Tout est prêt dans `tailwind.config.ts` et `app/globals.css`.

## Brancher Sanity (optionnel maintenant)
- Crée un projet : `npm create sanity@latest` (dans un dossier `sanity/` à la racine)
- Ajoute des schémas (exemple ci-dessous)
- Place les variables d’environnement dans `.env.local` :
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
```

### Exemple schéma `article.ts`
```ts
import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'article', title: 'Article', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    { name: 'section', type: 'string', options: { list: [
      { title: 'Culture & Opinion', value: 'culture' },
      { title: 'Style', value: 'style' },
      { title: 'Communauté', value: 'communaute' },
      { title: 'Lieux', value: 'lieux' },
      { title: 'Personnalités', value: 'personnalites' },
    ]}},
    { name: 'excerpt', type: 'text' },
    { name: 'coverImage', type: 'image', options: { hotspot: true } },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'publishedAt', type: 'datetime' },
  ]
})
```

## Newsletter API
Route: `app/api/newsletter/route.ts` (mock). À remplacer par Mailchimp/Resend.

## Licence
MIT
