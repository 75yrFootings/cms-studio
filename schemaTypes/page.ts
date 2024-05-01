import {defineField, defineType} from 'sanity'
import { FaRegFile } from 'react-icons/fa'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: FaRegFile,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      published: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const { slug } = selection 
      return {...selection, subtitle: `${slug.current}` }
    }
  }
})