import {defineArrayMember, defineField, defineType} from 'sanity'
import { FaHome } from "react-icons/fa"

export const FrontPage = defineType({
  name: 'frontPage',
  title: 'Home Page',
  type: 'document',
  icon: FaHome,
  groups: [
    { name: 'main', title: 'Main', default: true},
    { name: 'seo', title: 'SEO'}
  ],
  fields: [
    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'metaTags',
      group: 'seo',
    }),
    defineField({
      title: 'Hero Section',
      name: 'heroSection',
      type: 'heroBlock',
      group: ['main'],
      options: {
        collapsible: true,
        collapsed: true,
      }
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      group: ['main'],
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contentBlock',
          type: 'contentBlock'
        }),
        defineArrayMember({
          name: 'textWithImage',
          type: 'textWithImage',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'cta',
          type: 'cta',
        }),
        defineArrayMember({
          name: 'jumbotron',
          type: 'jumbotron',
        }),
        defineArrayMember({
          name: 'faqs',
          type: 'faqs',
        }),
        defineArrayMember({
          name: 'columnsBlock',
          type: 'columnsBlock',
        }),
        defineArrayMember({
          name: 'testimonialsBlock',
          type: 'testimonialsBlock',
        }),
      ]
    }),
  ]
})