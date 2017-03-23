import isDefined from './helper/is-defined'
import objectMapper from './helper/object-mapper'

import Error from './error'
import Creative from './creative'
import Pricing from './pricing'
import Impression from './impression'
import Extension from './extension'
import ViewableImpression from './viewable-impression'
import AdVerifications from './ad-verifications'

class Wrapper {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    // Required elements
    this.impressions = objectMapper(node.impression).to(Impression)
    this.VASTAdTagURI = isDefined(node.vASTAdTagURI) ? node.vASTAdTagURI.keyValue : undefined

    // Optional elements
    this.adSystem = isDefined(node.adSystem) ? node.adSystem.keyValue : undefined
    this.pricing = objectMapper(node.pricing).to(Pricing).shift()
    this.errors = objectMapper(node.error).to(Error)
    this.viewableImpression = objectMapper(node.viewableImpression).to(ViewableImpression).shift()
    this.adVerifications = objectMapper(node.adVerifications).to(AdVerifications).shift()

    if (node.extensions) {
      this.extensions = objectMapper(node.extensions.extension).to(Extension)
    }

    this.creatives = objectMapper(node.creatives).to(Creative).shift()

    // Optional attrs
    this.followAdditionalWrappers = node.attr('followAdditionalWrappers') || true
    this.allowMultipleAds = node.attr('allowMultipleAds') || false
    this.fallbackOnNoAd = node.attr('fallbackOnNoAd')
  }
}

export default Wrapper
