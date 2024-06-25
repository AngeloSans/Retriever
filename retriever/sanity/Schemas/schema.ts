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
      name: 'relatos',
      type: 'document',
      title: 'relatos',
      fields: [
        defineField({
          name: 'user',
          title: 'User',
          type: 'string',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
        }),
        defineField({
          name: 'Mensage',
          title: 'Message',
          type: 'string',
        }),
        defineField({
          name: 'date',
          title: 'Date',
          type: 'date',
        }),
        defineField({
          name: 'photo',
          title: 'Photo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineType({
      name: 'RetrieverAcademic',
      type: 'document',
      title: 'RetrieverAcademic',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'autor',
          title: 'Author',
          type: 'string',
        }),
        defineField({
          name: 'previous',
          title: 'Previous',
          type: 'string',
        }),
      ],
    }),
  ],
};
