class CreativeExtension {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.type = node.attr('type')
    this.xmlObject = node.keyValue
  }
}

export default CreativeExtension
