import { type SchemaTypeDefinition } from 'sanity';

import photoshoot from './schemas/photoshoot';
import pricing from './schemas/pricing';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pricing, photoshoot],
};
