import {defineType, defineField} from 'sanity'
import {StringIcon} from '@sanity/icons'

export const ContentBlock = defineType({
  title: 'Block Content',
  name: 'contentBlock',
  type: 'object',
  icon: StringIcon,
  fields: [
    defineField({
      title: 'Block Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'blockContent',
      type: 'blockContent'
    })
  ],
  preview: {
    select: {
      title: 'name',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Content Block',
        media: StringIcon,
      }
    }
  }
})
