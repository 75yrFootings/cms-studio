import {defineArrayMember, defineField, defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'

export const ColumnsBlock = defineType({
  name: 'columnsBlock',
  type: 'object',
  title: 'Columns Section',
  icon: SplitVerticalIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'columnNumber',
      title: 'Number of Columns',
      type: 'number',
      options: {
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
        ]
      }
    }),
    defineField({
      name: 'columns',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'columnItem',
          type: 'columnItem',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cols: 'columnNumber',
      image: 'image',
    },
    prepare({title, cols, image}) {
      return {
        title: title || 'Untitled',
        subtitle: cols + ' Column Section',
        media: image || SplitVerticalIcon,
      }
    }
  }
})