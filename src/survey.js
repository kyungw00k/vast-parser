class Survey {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.type = node.attr('type')
    this.uri = node.keyValue
  }
}

export default Survey
