import objectMapper from './helper/object-mapper'

import StaticResource from './static-resource'
import IFrameResource from './iframe-resource'
import HTMLResource from './html-resource'
import AdParameters from './ad-parameters'
import NonLinearClickThrough from './non-linear-click-through'
import NonLinearClickTracking from './non-linear-click-tracking'

class NonLinear {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.staticResource = objectMapper(node.staticResource).to(StaticResource)
    this.iFrameResource = objectMapper(node.iFrameResource).to(IFrameResource)
    this.hTMLResource = objectMapper(node.hTMLResource).to(HTMLResource)
    this.adParameters = objectMapper(node.adParameters).to(AdParameters)
    this.nonLinearClickThrough = objectMapper(node.nonLinearClickThrough).to(NonLinearClickThrough).shift()
    this.nonLinearClickTracking = objectMapper(node.nonLinearClickTracking).to(NonLinearClickTracking)
  }
}

export default NonLinear
