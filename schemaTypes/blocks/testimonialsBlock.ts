import {defineField, defineType, defineArrayMember} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const TestimonialsBlock = defineType({
  name: 'testimonialsBlock',
  title: 'Testimonial Section',
  icon: StarIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Sub-Heading',
      type: 'text',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'testimonial',
          type: 'reference',
          to: [{type: 'testimonial'}],
          options: {
            filter: ({parent}) => {
              console.log(parent)
              const ids = (parent as any).map((doc: { _ref: any; }) => doc._ref).filter(Boolean)
              return {
                filter: '!(_id in $ids)',
                params: {ids}
              }
            }
          }
        }),
      ],
      validation: rule => rule.unique()
    }),
  ]
})