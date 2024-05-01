import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Define actions for singleton doc type
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define singleton doc types
const singletonTypes = new Set(["frontPage", "siteSettings"])

export default defineConfig({
  name: 'default',
  title: '75yr Footings',

  projectId: '5mv8hczt',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S) => 
      S.list()
        .title("Content")
        .items([
          // Singleton type list
          S.documentListItem()
            .id('frontPage')
            .title('Home Page')
            .schemaType('frontPage')
            .child(
              S.document()
                .title("Home Page")
                .schemaType("frontPage")
                .documentId('frontPage')
            ),
          // Regular document types
          S.documentTypeListItem('page'),
          S.documentTypeListItem('post'),
          S.divider(),
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
        ]),
  }), 
  visionTool()],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from "New Document" menu options
    templates: (templates) => 
      templates.filter( ({schemaType}) => !singletonTypes.has(schemaType) ),
  },

  document: {
    // Singletons filter out actions that are not in singletonActions list above
    actions: (input, content) =>
      singletonTypes.has(content.schemaType)
      ? input.filter( ({action}) => action && singletonActions.has(action) )
      : input,
  },
})
