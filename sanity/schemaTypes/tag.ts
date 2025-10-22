import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'tag', title: 'Tag', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ]
})
