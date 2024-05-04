import {useState, useEffect} from 'react'
import { useClient, useFormValue } from 'sanity'
import { getValueAtPath } from 'sanity'

const AsyncSelect = (props, context) => {
  const docId = useFormValue(['menuItems'])
  const item = useFormValue(['menuItem'])
  docId.map((el) => {
    const ref = el.menuPage?._ref
    // console.log(el)
  })
  const [listItems, setListItems] = useState([])
  const {schemaType, renderDefault} = props
  const {options} = schemaType
  const {url, formatResponse} = options
  console.log(url)
  const client = useClient({apiVersion: '2022-03-07'})

  useEffect(() => {
    const getCats = async () =>
      client.fetch(`*[_type == 'page']{title}`)
        .then((res) => {
          // console.log(res)
          return res})
        .then(formatResponse)
        .then(setListItems)

    getCats()
  }, [url, formatResponse])

  return renderDefault({
    ...props,
    schemaType: {...schemaType, options: {...options, list: listItems}},
  })
}

export default AsyncSelect