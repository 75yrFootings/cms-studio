import {defineField, defineType} from 'sanity'

export const SiteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Working Hours',
      type: 'string'
    }),
    defineField({
      name: 'showHours',
      title: 'Show Hours',
      type: 'boolean',
    }),
    defineField({
      name: 'phone',
      title: 'Business Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Business Email',
      type: 'string',
    }),
    defineField({
      name: 'showEmail',
      title: 'Show Email',
      type: 'boolean',
    }),
  ]
})