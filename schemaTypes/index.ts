import { Page } from './page.js'
import { FrontPage } from './frontPage.js'
import { Post } from './post.js'
import { Category } from './category.js'
import { Author } from './author.js'
import { Testimonial } from './testimonial.js'
import { SiteSettings } from './siteSettings.js'
import { FAQsList } from './faqsList.js'
// Content Blocks
import { ContentBlock } from './blocks/contentBlock.js'
import { CallToAction } from './blocks/callToActionBlock.js'
import { Hero } from './blocks/heroBlock.js'
import { ImageGallery } from './blocks/imageGalleryBlock.js'
import { TextWithImage } from './blocks/textWithImageBlock.js'
import { Jumbotron } from './blocks/jumbotron.js'
import { FAQs } from './blocks/factsQuestions.js'
import { ColumnsBlock } from './blocks/columnsBlock.js'
import { TestimonialsBlock } from './blocks/testimonialsBlock.js'
// Utility Blocks
import { Button } from './utils/buttonObj.js'
import { Menu } from './utils/menus.js'
import { BlockContent } from './utils/block.js'
import { FAQItem } from './utils/faqItem.js'
import { ColumnItem } from './utils/columnItem.js'
import { MetaTags } from './utils/meta.js'


export const schemaTypes = [
  Page,
  FrontPage,
  Post,
  Category,
  Author,
  Testimonial,
  FAQsList,
  SiteSettings,

  ContentBlock,
  CallToAction,
  Hero,
  ImageGallery,
  TextWithImage,
  Jumbotron,
  FAQs,
  ColumnsBlock,
  TestimonialsBlock,

  Button,
  Menu,
  BlockContent,
  FAQItem,
  ColumnItem,
  MetaTags,
]
