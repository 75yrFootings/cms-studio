import {defineArrayMember, defineField, defineType} from 'sanity'
import { FaHome } from "react-icons/fa"

export default defineType({
  name: 'frontPage',
  title: 'Home Page',
  type: 'document',
  icon: FaHome,
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'form', title: 'Call To Action'},
  ],
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'heroBlock',
          type: 'heroBlock',
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
        })
      ]
    }),
  ]
})