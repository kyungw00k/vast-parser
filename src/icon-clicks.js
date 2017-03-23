import objectMapper from './helper/object-mapper'
import IconClickThrough from './icon-click-through'
import IconClickTracking from './icon-click-tracking'

class IconClicks {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.iconClickThrough = objectMapper(node.iconClickThrough).to(IconClickThrough).shift()

    if (node.iconClickTracking) {
      this.iconClickTracking = objectMapper(node.iconClickTracking).to(IconClickTracking)
    }
  }
}

export default IconClicks
