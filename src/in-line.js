import objectMapper from './helper/object-mapper'

import Creative from './creative'
import Category from './category'
import Survey from './survey'
import Impression from './impression'
import Error from './error'
import Pricing from './pricing'
import Extension from './extension'
import ViewableImpression from './viewable-impression'

class InLine {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    // required sub elements
    this.adSystem = node.adSystem ? node.adSystem.keyValue : undefined
    this.adTitle = node.adTitle ? node.adTitle.keyValue : undefined

    if (node.impression) {
      this.impression = objectMapper(node.impression).to(Impression)
    }

    if (node.creatives) {
      this.creatives = objectMapper(node.creatives.creative).to(Creative)
    }

    // optional sub elements
    if (node.category) {
      this.category = objectMapper(node.category).to(Category)
    }

    this.description = node.description ? node.description.keyValue : undefined
    this.advertiser = node.advertiser ? node.advertiser.keyValue : undefined
    this.pricing = objectMapper(node.pricing).to(Pricing).shift()

    if (node.survey) {
      this.survey = objectMapper(node.survey).to(Survey)
    }

    if (node.error) {
      this.error = objectMapper(node.error).to(Error)
    }

    this.viewableImpression = objectMapper(node.viewableImpression).to(ViewableImpression).shift()

    this.adVerification = node.adVerification ? node.adVerification.keyValue : undefined

    if (node.extensions) {
      this.extensions = objectMapper(node.extensions.extension).to(Extension)
    }
  }
}

export default InLine
