import {defineField, defineType, defineArrayMember, ValidationContext, CustomValidatorResult} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

type hasTypeString = {_type: string}

export function hasType(doc: any): doc is hasTypeString {
  return '_type' in doc
}

export const Page = defineType({
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
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
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contentBlock',
          type: 'contentBlock'
        }),
        defineArrayMember({
          name: 'heroBlock',
          type: 'heroBlock',
        }),
        defineArrayMember({
          name: 'textWithImage',
          type: 'textWithImage',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'cta',
          type: 'cta',
        })
      ]
    }),
  ],
  // preview: {
  //     select: {
  //         title: 'slug.current',
  //         subtitle: 'title',
  //         media: 'picture'
  //     },
  //     prepare(selection) {
  //         return selection
  //     }
  // }
})
