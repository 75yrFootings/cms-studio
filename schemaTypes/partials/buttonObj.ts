import {defineType} from 'sanity'

export default defineType({
  title: 'Button',
  name: 'button',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {name: 'text', type: 'string', title: 'Button Text'},
    {name: 'link', type: 'url', title: 'Button Link'}
  ]
})