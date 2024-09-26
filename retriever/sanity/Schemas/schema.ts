import { defineType, defineField, type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    defineType({
      name: 'post',
      type: 'document',
      title: 'Post',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'summary',
          title: 'Summary',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
        defineField({
          name: 'likes',
          title: 'Likes',
          type: 'number',
        }),
        defineField({
          name: 'date',
          title: 'Date',
          type: 'datetime',
        }),
        defineField({
          name: 'owner',
          title: 'Owner',
          type: 'string',
        }),
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineType({
      name: 'relatos',
      type: 'document',
      title: 'Relatos',
      fields: [
        defineField({
          name: 'id',
          title: 'ID',
          type: 'string',
        }),
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
          name: 'message',
          title: 'Message',
          type: 'text',
        }),
        defineField({
          name: 'date',
          title: 'Date',
          type: 'datetime',
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
      name: 'retrieverAcademic',
      type: 'document',
      title: 'RetrieverAcademic',
      fields: [
        defineField({
          name: 'id',
          title: 'ID',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'author',
          title: 'Author',
          type: 'string',
        }),
        defineField({
          name: 'previous',
          title: 'Previous',
          type: 'text',
        }),
      ],
    }),
  ],
};
