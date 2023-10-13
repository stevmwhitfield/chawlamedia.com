import { type SchemaTypeDefinition } from 'sanity';

import pricing from './schemas/pricing';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pricing],
};
