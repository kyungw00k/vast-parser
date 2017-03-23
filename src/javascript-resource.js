class JavaScriptResource {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.apiFramework = node.attr('apiFramework')
    this.uri = node.keyValue
  }
}

export default JavaScriptResource
