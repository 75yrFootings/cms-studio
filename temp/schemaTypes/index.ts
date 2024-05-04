import blockContent from './partials/blockContent'
import buttonObj from './partials/buttonObj'
import heroObj from './partials/heroObj'
import category from './category'
import post from './post'
import author from './author'
import page from './page'
import frontPage from './frontPage'
import siteSettings from './siteSettings'
import { callToActionType } from './blocks/callToActionBlock.js'
import { imageGalleryType } from './blocks/imageGalleryBlock'
import { textWithImageType } from './blocks/textWithImageBlock'
import { heroType } from './blocks/heroBlock'

export const schemaTypes = [
  frontPage, 
  page, 
  post, 
  author, 
  category, 
  blockContent, 
  siteSettings,
  buttonObj,
  heroObj,
  callToActionType,
  heroType,
  imageGalleryType,
  textWithImageType
]
