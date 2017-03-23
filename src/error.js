class Error {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.uri = node.keyValue
  }
}

export default Error
