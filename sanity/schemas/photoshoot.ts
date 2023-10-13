const photoshoot = {
  name: 'photoshoot',
  type: 'document',
  title: 'Photoshoot',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Photoshoot Type',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'photos',
      type: 'array',
      title: 'Photos',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
  ],
};

export default photoshoot;
