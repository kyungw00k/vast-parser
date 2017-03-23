class InteractiveCreativeFile {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.type = node.attr('type')
    this.apiFramework = node.attr('apiFramework')
    this.uri = node.keyValue
  }
}

export default InteractiveCreativeFile
