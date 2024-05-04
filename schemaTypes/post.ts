import {defineField, defineType, ValidationContext, CustomValidatorResult} from 'sanity'

type hasTypeString = {_type: string}

export function hasType(doc: any): doc is hasTypeString {
  return '_type' in doc
}

export const Post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) =>
        rule.custom(
          (title: string | undefined, context: ValidationContext): CustomValidatorResult => {
            if (context && context.path && context.path.length > 1) {
              return true
            } else {
              return title !== undefined && title.length > 0 ? true : 'title is required'
            }
          },
        ),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source:'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        isUnique: async (value, context) => {
          if (hasType(context.parent)) {
            const currentSchemaType = context.parent._type
            const docsWithSameSlug = await context
              .getClient({apiVersion: '2022-03-07'})
              .fetch(`*[_type=="${currentSchemaType}" && slug== "value"]`);
              return docsWithSameSlug.length === 0;
          } else {
            return context.defaultIsUnique(value, context)
          }
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
