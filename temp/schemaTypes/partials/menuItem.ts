import {defineField, defineType} from 'sanity'
import AsyncSelect from '../../lib/AsyncSelect.js'

function getData(id: any) {
  // const client = useClient({apiVersion: '2022-03-07'})
  // get ref data
}

// 

export default defineType({
  title: 'Menu Item',
  name: 'menuItem',
  type: 'document',
  fields: [
    
    defineField({
      title: 'Select Page',
      name: 'menuPage',
      type: 'reference',
      to: [{type: 'page'}]
    }),
    defineField({
      name: 'catBreed',
      title: 'Cat Breed',
      type: 'string',
      options: {
        list: [],
        url: ({document}) => document.catBreed,
        formatResponse: (data) => 
          data.map((docs) => ({
            title: docs.title,
            value: docs.title,
          }))
        ,
      },
      components: {
        input: AsyncSelect,
      },
    }),
    defineField({
      title: 'URL',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, context) => getSelectedSlug(doc, context, "slug")
      }
    }),
    defineField({name: 'title', type: 'string', 
      title: 'Alt Title',

    }),
    
  ],
  preview: {
    select: {
      item: 'menuPage',
      slug: 'slug'
      // alt: 'title'
    },
    prepare: ({item, slug}) => {
      const data = getData(item)
      // console.log(data)
      
      return {
        title: "title",
        // subtitle
      }
    }
  }
})

// function GetData(id: any) {
//   const client = useClient({apiVersion: '2022-03-07'})
//   console.log(id)
//   useEffect(() => {
//     // async function getRef() {
//       const res = await client.fetch(`*[]`)
//       // console.log("Res: ", res)
//     // }
//     // getRef()
//   } )
//   console.log(id)
//   return id
// }

async function getSelectedSlug(doc: any, context: any, type: any) {
  const {parent, getClient} = context
  const client = getClient({apiVersion: '2022-03-07'})
  const ref = parent.menuPage._ref
  const query = `*[_id == "${ref}"]{
    title,
    "slug": slug.current
  }`
  const result = await client.fetch(query).then((data: any) => {
    return data[0]
  })
  if (type === 'title') {
    return result.title
  } else {
    return result.slug
  }
  
}

