// import {InsertAboveIcon, InsertBelowIcon} from '@sanity/icons'

export default function ContentStructure(S: any) {
  return S.list()
  .id('content')
  .title('Content')
  .items([
    S.listItem()
      .title('Front Page')
      .schemaType('frontPage')
      .child(
        S.document()
          .title('Home Page')
          .documentId('fontPage')
          .schemaType('frontPage')
      ),
    S.documentTypeListItem('page').title('Pages'),
    S.documentTypeListItem('post').title('Posts'),
  ])
}