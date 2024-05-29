import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const Menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
    }),
    defineField({
      title: 'Menu Order',
      name: 'navOrder',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}],
          options: {
            disableNew: true,
            filter: ({document}) => {
              const ids = (document as any).navOrder.map((doc: { _ref: any; }) => doc._ref).filter(Boolean)
              return {
                filter: '!(_id in $ids)',
                params: {ids}
              }
            }
          }
        }
      ],
      validation: Rule => Rule.unique()
    })
  ]
})