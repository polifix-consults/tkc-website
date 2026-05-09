import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p9rc6lzn';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio', // <-- important that this matches the routing where we embed the studio
  name: 'tkc_studio',
  title: 'TKC Content Studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
