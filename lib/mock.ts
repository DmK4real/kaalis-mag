export type Article = {
  title: string
  slug: string
  excerpt?: string
  coverImage?: string
  section: 'lieux' | 'personnalites' | 'style' | 'culture' | 'communaute'
  author?: string
  publishedAt?: string
  body?: string[]
  tags?: string[]
}

export const mockArticles: Article[] = [
  {
    title: 'Café lagunaire : 7 terrasses à tester',
    slug: 'cafes-lagunaires-7-terrasses',
    excerpt: 'Des adresses au bord de l’eau pour chiller en fin de journée.',
    coverImage: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1600&auto=format&fit=crop',
    section: 'lieux',
    author: 'Rédaction Kaalis',
    publishedAt: '2025-10-01',
    tags: ['cafés','bord de lagune','afterwork'],
    body: [
      'Abidjan regorge de terrasses avec vue. On a sélectionné 7 spots où le coucher de soleil vaut le détour.',
      'Conseil: arrivez avant 18h pour avoir une table en bord de lagune.',
    ],
  },
  {
    title: 'Portrait : Aïcha, la créatrice derrière “Atelier Ebène”',
    slug: 'portrait-aicha-atelier-ebene',
    excerpt: 'Une nouvelle voix du design ivoirien.',
    coverImage: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    section: 'personnalites',
    author: 'Kadi Traoré',
    publishedAt: '2025-09-20',
    tags: ['design','artisanat'],
    body: [
      'Aïcha revisite les matériaux locaux avec une exigence de durabilité.',
      'Ses pièces iconiques mêlent bois clair et fibres naturelles.',
    ],
  },
  {
    title: 'Guide style : 5 marques locales à suivre',
    slug: '5-marques-locales-style',
    excerpt: 'Sélection de labels qui montent.',
    coverImage: 'https://images.unsplash.com/photo-1520974735194-88bb983f74e8?q=80&w=1600&auto=format&fit=crop',
    section: 'style',
    author: 'Rédaction Kaalis',
    publishedAt: '2025-10-10',
    tags: ['mode','local'],
    body: [
      'Des coupes nettes, des couleurs terracotta et sable — une esthétique Kaalis compatible.',
      'Voici 5 marques à essayer cet automne.',
    ],
  },
  
]
