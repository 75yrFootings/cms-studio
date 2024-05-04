// Menus and other site management features live here
// Menus, Header, Footer

export default function ManagementStructure(S: any) {
  return S.list()
  .id('management')
  .title('Management')
  .items([
    // S.listItem()
    //   .title('Front Page')
    //   .schemaType('frontPage')
    //   .child(
    //     S.document()
    //       .title('Home Page')
    //       .documentId('fontPage')
    //       .schemaType('frontPage')
    //   ),
    S.documentTypeListItem('menu').title('Menus'),
    S.documentTypeListItem('author').title('Authors'),
    S.documentTypeListItem('category').title('Categories'),
  ])
}