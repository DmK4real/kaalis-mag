import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'auteur', title: 'Auteur', type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    { name: 'bio', type: 'text' },
    { name: 'avatar', type: 'image', options: { hotspot: true } }
  ]
})
