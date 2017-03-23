import objectMapper from './helper/object-mapper'

import StaticResource from './static-resource'
import IFrameResource from './iframe-resource'
import HTMLResource from './html-resource'
import IconClicks from './icon-clicks'
import IconViewTracking from './icon-view-tracking'

class Icon {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.program = node.attr('program')
    this.width = node.attr('width')
    this.height = node.attr('height')

    this.xPosition = node.attr('xPosition')
    this.yPosition = node.attr('yPosition')

    // TODO: parse HH:MM:SS.mmm (.mmm is optional)
    this.duration = node.attr('duration')

    this.offset = node.attr('offset')
    this.apiFramework = node.attr('apiFramework')
    this.pxratio = node.attr('pxratio') || 1

    this.staticResource = objectMapper(node.staticResource).to(StaticResource)
    this.iFrameResource = objectMapper(node.iFrameResource).to(IFrameResource)
    this.htmlResource = objectMapper(node.hTMLResource).to(HTMLResource)
    this.iconClicks = objectMapper(node.iconClicks).to(IconClicks).shift()
    this.iconViewTracking = objectMapper(node.iconViewTracking).to(IconViewTracking)
  }
}

export default Icon
