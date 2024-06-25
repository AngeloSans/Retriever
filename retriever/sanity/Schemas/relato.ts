import { defineType, defineField, type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        defineType({
            name: 'relatos',
            title: 'Relatos',
            type: 'document',
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
                    name: 'message',
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
    ],
};
