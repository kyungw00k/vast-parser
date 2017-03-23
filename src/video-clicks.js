import objectMapper from './helper/object-mapper'
import ClickThrough from './click-through'
import ClickTracking from './click-tracking'
import CustomClick from './custom-click'

class VideoClicks {
  /**
   *
   * @param {JXONTree} node
   */
  constructor (node) {
    this.clickThrough = objectMapper(node.clickThrough).to(ClickThrough)
    this.clickTracking = objectMapper(node.clickTracking).to(ClickTracking)
    this.customClick = objectMapper(node.customClick).to(CustomClick)
  }
}

export default VideoClicks
