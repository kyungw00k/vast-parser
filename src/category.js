class Category {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.authority = node.attr('authority')
    this.value = node.keyValue
  }
}

export default Category
