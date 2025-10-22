import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'article', title: 'Article', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'section', type: 'string', options: { list: [
      { title: 'Culture & Opinion', value: 'culture' },
      { title: 'Style', value: 'style' },
      { title: 'Communauté', value: 'communaute' },
      { title: 'Lieux', value: 'lieux' },
      { title: 'Personnalités', value: 'personnalites' },
    ]}, validation: r => r.required() }),
    { name: 'excerpt', type: 'text' },
    { name: 'coverImage', type: 'image', options: { hotspot: true } },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'tags', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] },
    { name: 'author', type: 'reference', to: [{ type: 'auteur' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'seoTitle', type: 'string' },
    { name: 'seoDescription', type: 'text' },
  ]
})
