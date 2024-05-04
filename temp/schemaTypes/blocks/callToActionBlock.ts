import {defineField, defineType} from 'sanity'

export const callToActionType = defineType({
  name: 'cta',
  type: 'document',
  title: 'Call To Action',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})