import {defineField, defineType} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export const TextWithImage = defineType({
  name: 'textWithImage',
  type: 'object',
  title: 'Text with Image',
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
      name: 'content',
      type: 'text',
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
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text with Image',
        media: image || InlineIcon,
      }
    }
  }
})