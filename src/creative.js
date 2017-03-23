import objectMapper from './helper/object-mapper'

import Linear from './linear'
import NonLinearAds from './non-linear-ads'
import CompanionAds from './companion-ads'
import UniversalAdId from './universal-ad-id'
import CreativeExtension from './creative-extension'

class Creative {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.id = node.attr('id')
    this.adId = node.attr('adId')
    this.sequence = node.attr('sequence')
    this.apiFramework = node.attr('apiFramework')

    this.universalAdId = objectMapper(node.universalAdId).to(UniversalAdId).shift()

    this.linear = objectMapper(node.linear).to(Linear).shift()

    if (node.companionAds) {
      this.companionAds = objectMapper(node.companionAds).to(CompanionAds).shift()
    }

    if (node.nonLinearAds) {
      this.nonLinearAds = objectMapper(node.nonLinearAds).to(NonLinearAds).shift()
    }

    if (node.creativeExtensions) {
      this.creativeExtensions = objectMapper(node.creativeExtensions).to(CreativeExtension)
    }
  }
}

export default Creative
