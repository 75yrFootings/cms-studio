import { Page } from './page.js'
import { FrontPage } from './frontPage.js'
import { Post } from './post.js'
import { Category } from './category.js'
import { Author } from './author.js'
import { SiteSettings } from './siteSettings.js'
// Content Blocks
import { ContentBlock } from './blocks/contentBlock.js'
import { CallToAction } from './blocks/callToActionBlock.js'
import { Hero } from './blocks/heroBlock.js'
import { ImageGallery } from './blocks/imageGalleryBlock.js'
import { TextWithImage } from './blocks/textWithImageBlock.js'
// Utility Blocks
import { Button } from './utils/buttonObj.js'
import { Menu } from './utils/menus.js'
import { BlockContent } from './utils/block.js'


export const schemaTypes = [
  Page,
  FrontPage,
  Post,
  Category,
  Author,
  SiteSettings,

  ContentBlock,
  CallToAction,
  Hero,
  ImageGallery,
  TextWithImage,

  Button,
  Menu,
  BlockContent,
]
