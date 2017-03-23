import objectMapper from './helper/object-mapper'

import JavaScriptResource from './javascript-resource'
import FlashResource from './flash-resource'
import ViewableImpression from './viewable-impression'

/**
 * @description When included, verification contents must be executed (if possible) BEFORE the media file or
 * interactive creative file is executed, to ensure verification can track ad play as intended.
 */
class Verification {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.vendor = node.attr('vendor')
    this.javaScriptResources = objectMapper(this.javaScriptResource).to(JavaScriptResource)
    this.flashResources = objectMapper(this.javaScriptResource).to(FlashResource)
    this.viewableImpression = objectMapper(this.javaScriptResource).to(ViewableImpression).shift()
  }
}

export default Verification
