import {defineField, defineType} from 'sanity'
import {ConfettiIcon} from '@sanity/icons'


export const CallToAction = defineType({
  name: 'cta',
  type: 'document',
  title: 'Call To Action',
  icon: ConfettiIcon,
  fields: [
    defineField({
      title: 'Headline',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'text',
    }),
    defineField({
      title: 'Link',
      name: 'button',
      type: 'button',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternate text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Call To Action',
        media: image || ConfettiIcon,
      }
    }
  }
})