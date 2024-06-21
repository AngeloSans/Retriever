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
    defineType({
      name: 'Relato',
      type: 'document',
      title: 'Relato',
      fields: [
        defineField({
          name: 'user',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'instagram',
          title: 'Content',
          type: 'string',
        }),
        defineField({
          name: 'Mensage',
          title: 'mensage',
          type: 'string',
        }),
        defineField({
          name: 'date',
          title: 'Date',
          type: 'date',
        }),
      ],
    }),
    defineType({
      name: 'RetrieverAcademic',
      type: 'document',
      title: 'Relato',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'autor',
          title: 'autor',
          type: 'string',
        }),
        defineField({
          name: 'previous',
          title: 'previous',
          type: 'string',
        }),
      ],
    }),
  ],
};
