class Tracking {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.event = node.attr('event')
    this.offset = node.attr('offset')
    this.uri = node.keyValue
  }
}

export default Tracking
