import objectMapper from './helper/object-mapper'

import StaticResource from './static-resource'
import IFrameResource from './iframe-resource'
import HTMLResource from './html-resource'
import AdParameters from './ad-parameters'
import AltText from './alt-text'
import CompanionClickThrough from './companon-click-through'
import CompanionClickTracking from './companon-click-tracking'
import Tracking from './tracking'

class Companion {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.width = node.attr('width')
    this.height = node.attr('height')
    this.id = node.attr('id')
    this.assetWidth = node.attr('assetWidth')
    this.expandedWidth = node.attr('expandedWidth')
    this.expandedHeight = node.attr('expandedHeight')
    this.apiFramework = node.attr('apiFramework')
    this.adslotID = node.attr('adslotID')
    this.pxratio = node.attr('pxratio') || 1

    if (node.staticResource) {
      this.staticResource = objectMapper(node.staticResource).to(StaticResource)
    }

    if (node.iFrameResource) {
      this.iFrameResource = objectMapper(node.iFrameResource).to(IFrameResource)
    }

    if (node.hTMLResource) {
      this.htmlResource = objectMapper(node.hTMLResource).to(HTMLResource)
    }

    if (node.adParameters) {
      this.adParameters = objectMapper(node.adParameters).to(AdParameters)
    }

    if (node.altText) {
      this.altText = objectMapper(node.altText).to(AltText).shift()
    }

    if (node.companionClickThrough) {
      this.companionClickThrough = objectMapper(node.companionClickThrough).to(CompanionClickThrough).shift()
    }

    if (node.companionClickTracking) {
      this.companionClickTracking = objectMapper(node.companionClickTracking).to(CompanionClickTracking)
    }

    if (node.trackingEvents && node.trackingEvents.tracking) {
      this.trackingEvents = objectMapper(node.trackingEvents.tracking).to(Tracking)
    }
  }
}

export default Companion
