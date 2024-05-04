import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const ImageGallery = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternate text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Gallery',
        media: image || ImagesIcon,
      }
    }
  }
})