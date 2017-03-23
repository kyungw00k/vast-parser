import objectMapper from './helper/object-mapper'

import Companion from './companion'

class CompanionAds {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.required = node.attr('required')
    this.companion = objectMapper(node.companion).to(Companion).shift()
  }
}

export default CompanionAds
