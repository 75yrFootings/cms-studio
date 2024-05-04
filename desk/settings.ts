export default function SettingsStructure(S: any) {
  return S.list()
    .id('siteSettings')
    .title('Settings')
    .items([
      S.documentListItem()
        .id('siteSettings')
        .title("Site Settings")
        .schemaType('siteSettings')
        .child(
          S.document()
            .title("Site Settings")
            .schemaType("siteSettings")
            .documentId('siteSettings')
        )
    ])
}