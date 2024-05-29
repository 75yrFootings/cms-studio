import {defineField, defineType} from 'sanity'

export const FAQItem = defineType({
  name: 'faqItem',
  type: 'object',
  title: 'FAQ Item',
  fields: [
    defineField({
      title: 'headline',
      name: 'headline',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'text',
      title: 'Content',
    }),
  ]
})