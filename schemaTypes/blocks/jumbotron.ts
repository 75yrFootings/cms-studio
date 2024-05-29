import {defineField, defineType} from 'sanity'
import {InsertAboveIcon, ImageIcon} from '@sanity/icons'

export const Jumbotron = defineType({
  name: 'jumbotron',
  type: 'object',
  title: 'Jumbotron',
  icon: ImageIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'body',
      type: 'text',
    }),
    defineField({
      title: 'Background Image',
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
      title: 'Display Button?',
      name: 'displayButton',
      type: 'boolean'
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
      hidden: ({parent}) => !parent?.displayButton
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
        subtitle: 'Jumbotron',
        media: image || InsertAboveIcon,
      }
    }
  }
})