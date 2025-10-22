import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'personnalite', title: 'Personnalité', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    { name: 'excerpt', type: 'text' },
    { name: 'portrait', type: 'image', options: { hotspot: true } },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'publishedAt', type: 'datetime' }
  ]
})
