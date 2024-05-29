import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const Hero = defineType({
  name: 'heroBlock',
  type: 'object',
  title: 'Hero',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'text',
    }),
    defineField({
      name: 'mediaType',
      type: 'boolean',
      title: 'Image | Video',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image Background',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.mediaType,
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
        }),
      ],
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Video Background',
      hidden: ({parent}) => !parent?.mediaType,
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
        media: image || ImageIcon,
      }
    }
  }
})