import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const Testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'blockContent',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating up to 5. Example is 4.95',
      validation: rule => rule.max(5),
    }),
    defineField({
      name: 'customer',
      title: 'Customer Name',
      description: 'Example: John B.',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'customer',
      rating: 'rating',
      image: 'image',
    },
    prepare({title, rating, image}) {
      return {
        title: title + ' - ' + rating || 'Untitled',
        subtitle: 'Testimonial',
        media: image || StarIcon,
      }
    }
  }
})