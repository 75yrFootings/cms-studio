import {defineField, defineType, ValidationContext, CustomValidatorResult} from 'sanity'

type hasTypeString = {_type: string}

export function hasType(doc: any): doc is hasTypeString {
  return '_type' in doc
}

export const Post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'main', title: 'Main', default: true},
    { name: 'seo', title: 'SEO'}
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      group: ['main', 'seo'],
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
      group: ['main', 'seo'],
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
      group: ['seo'],
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      group: ['seo'],
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'metaTags',
      group: 'seo',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      group: ['main'],
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      group: ['main'],
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      group: ['main'],
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
