import {defineField, type SchemaTypeDefinition} from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
      defineField({
        name: 'Title',
        title: 'title',
        type: 'string',
      }),
    defineField({
      name: 'Content',
      title: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'Likes',
      title: 'likes',
      type: 'int',
    }),
    defineField({
      name: 'Date',
      title: 'Date',
      type: 'date',
    }),

  ],
}
