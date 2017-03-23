class AdParameters {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.xmlEncoded = node.attr('xmlEncoded')
    this.metadata = node.keyValue
  }
}

export default AdParameters
