import {defineField, defineType} from 'sanity'
import { FaGear } from "react-icons/fa6";

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FaGear,
  groups: [
    { name: 'navMenu', title: 'Navigation'}
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
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