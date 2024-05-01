import {defineField, defineType} from 'sanity'
import { FaGear } from "react-icons/fa6";

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FaGear,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    })
  ]
})