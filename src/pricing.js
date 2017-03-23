class Pricing {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.model = node.attr('model')
    this.currency = node.attr('currency')
    this.value = node.keyValue
  }
}

export default Pricing
