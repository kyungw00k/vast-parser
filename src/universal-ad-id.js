class UniversalAdId {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.idRegistry = node.attr('idRegistry') || 'unknown'
    this.idValue = node.attr('idValue') || 'unknown'
    this.content = node.keyValue
  }
}

export default UniversalAdId
