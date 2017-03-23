import InLine from './in-line'
import Wrapper from './wrapper'

class Ad {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.id = node.attr('id')
    this.sequence = node.attr('sequence')
    this.conditionalAd = node.attr('conditionalAd') || false

    if (node.inLine) {
      this.inLine = new InLine(node.inLine)
    } else if (node.wrapper) {
      this.wrapper = new Wrapper(node.wrapper)
    } else {
      // TODO: NO-AD
    }
  }
}

export default Ad
