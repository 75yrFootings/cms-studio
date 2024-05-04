import {defineField, defineType} from 'sanity'

export const Menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
    }),
    
    // defineField({
    //   title: 'Menu Order',
    //   name: 'navOrder',
    //   group: 'navMenu',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{type: 'page'}],
    //       options: {
    //         disableNew: true,
    //         filter: ({document}) => {
    //           // console.log(document)
    //           const ids = (document as any).navOrder.map((doc: { _ref: any; }) => doc._ref).filter(Boolean)
    //           // console.log(ids)
    //           return {
    //             filter: '!(_id in $ids)',
    //             params: {ids}
    //           }
    //         }
    //       }
    //     }
    //   ],
    //   // validation: Rule => Rule.unique()
    // })
  ]
})