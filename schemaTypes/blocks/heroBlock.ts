import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const Hero = defineType({
  name: 'heroBlock',
  type: 'object',
  title: 'Hero',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
        }),
      ],
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    }
  }
})