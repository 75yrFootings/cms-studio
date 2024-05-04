import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Button',
  name: 'button',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({name: 'text', type: 'string', title: 'Button Text'}),
    defineField({name: 'link', type: 'url', title: 'Button Link'}),
  ]
})