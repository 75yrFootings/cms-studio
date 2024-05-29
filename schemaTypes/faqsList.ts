import {defineArrayMember, defineField, defineType} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

export const FAQsList = defineType({
  name: 'faqsList',
  type: 'document',
  title: 'Facts, Answers & Questions',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      title: 'Headline',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'faq_item',
          type: 'faqItem'
        })
      ]
    }),
  ],
})