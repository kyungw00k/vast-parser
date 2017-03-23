import objectMapper from './helper/object-mapper'

import NonLinear from './non-linear'
import Tracking from './tracking'

class NonLinearAds {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.nonLinear = objectMapper(node.nonLinear).to(NonLinear)

    if (node.trackingEvents && node.trackingEvents.tracking) {
      this.trackingEvents = objectMapper(node.trackingEvents.tracking).to(Tracking)
    }
  }
}

export default NonLinearAds
