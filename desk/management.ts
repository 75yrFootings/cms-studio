// Menus and other site management features live here
// Menus, Header, Footer

export default function ManagementStructure(S: any) {
  return S.list()
  .id('management')
  .title('Management')
  .items([
    S.documentTypeListItem('menu').title('Menus'),
    S.documentTypeListItem('author').title('Authors'),
    S.documentTypeListItem('category').title('Categories'),
    S.documentTypeListItem('testimonial').title('Testimonials'),
    S.documentTypeListItem('faqsList').title('FAQs'),
  ])
}