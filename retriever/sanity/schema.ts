import { defineType, defineField, type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    defineType({
      name: 'Post',
      type: 'document',
      title: 'Post',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'string',
        }),
        defineField({
          name: 'likes',
          title: 'Likes',
          type: 'number',
        }),
        defineField({
          name: 'date',
          title: 'Date',
          type: 'date',
        }),
      ],
    }),
  ],
};
