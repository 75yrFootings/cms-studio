import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import { structureMain } from './desk'

const project:any = process.env.SANITY_STUDIO_PROJECT_ID
const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: '75yr Footings',

  projectId: project,
  dataset: 'production',

  plugins: [
    structureTool({
      title: 'My Site',
      structure: structureMain
    }), 
    media(),
    ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: schemaTypes
  },
})
