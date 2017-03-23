class StaticResource {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.creativeType = node.attr('creativeType')
    this.uri = node.keyValue
  }
}

export default StaticResource
