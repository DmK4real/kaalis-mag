import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'lieu', title: 'Lieu', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    { name: 'excerpt', type: 'text' },
    { name: 'coverImage', type: 'image', options: { hotspot: true } },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'address', type: 'string' },
    { name: 'mapUrl', type: 'url' },
    { name: 'publishedAt', type: 'datetime' }
  ]
})
