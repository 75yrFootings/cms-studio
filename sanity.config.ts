import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import { pagebuilderTool } from '@nuagedelait/sanity-pagebuilder'
import {media} from 'sanity-plugin-media'
import { structureMain } from './desk'

export default defineConfig({
  name: 'default',
  title: '75yr Footings',

  projectId: '5mv8hczt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: structureMain
    }), 
    visionTool(), 
    // pagebuilderTool(), 
    media(),
  ],

  schema: {
    types: schemaTypes
  },
})
