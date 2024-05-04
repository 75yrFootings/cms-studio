import { defineType } from "sanity";

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  options: {
    collapsible: false,
  },
  fields: [
    {
      name: 'heroTitle',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }
      ]
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button'
    }
  ]
})