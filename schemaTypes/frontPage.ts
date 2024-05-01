import {defineField, defineType} from 'sanity'
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
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'hero',
      group: 'hero',
    }),
  ]
})