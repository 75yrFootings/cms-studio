import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export const ColumnItem = defineType({
  name: 'columnItem',
  type: 'object',
  title: 'Column Item',
  icon: SquareIcon,
  fields: [
    defineField({
      title: 'headline',
      name: 'headline',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image Background',
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
      title: 'headline',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Column',
        media: image || SquareIcon,
      }
    }
  }
})