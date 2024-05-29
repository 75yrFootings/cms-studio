import {defineField, defineType} from 'sanity'
import {ErrorOutlineIcon} from '@sanity/icons'

export const MetaTags = defineType({
  name: 'metaTags',
  title: 'SEO Meta',
  type: 'object',
  icon: ErrorOutlineIcon,
  fields: [
    defineField({
      title: 'Title Tag',
      name: 'titleTag',
      description: 'Alternate Title Tag for current page',
      type: 'string',
    }),
    defineField({
      title: 'Meta Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'Meta Author',
      name: 'author',
      type: 'string',
    }),
  ],
})