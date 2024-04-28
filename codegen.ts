
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../server/schema.graphql",
  emitLegacyCommonJSImports: false,
  generates: {
    "./graphql.ts": {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./**/*.gql']
    },
  }
};

export default config;
