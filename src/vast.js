import objectMapper from './helper/object-mapper'

import Error from './error'
import Ad from './ad'

class VAST {
  /**
   *
   * @param {JXONTree} node
   */
  constructor (node) {
    this.version = parseFloat(node.attr('version'))

    this.error = objectMapper(node.error).to(Error)
    this.ad = objectMapper(node.ad).to(Ad)
  }
}

export default VAST
