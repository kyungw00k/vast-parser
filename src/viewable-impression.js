class ViewableImpression {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.id = node.attr('id')

    if (node.viewable) {
      this.viewable = new Viewable(node.viewable)
    }

    if (node.notViewable) {
      this.notViewable = new NotViewable(node.notViewable)
    }

    if (node.viewUndetermined) {
      this.viewUndetermined = new ViewUndetermined(node.viewUndetermined)
    }
  }
}

class Viewable {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.uri = node.keyValue
  }
}

class NotViewable {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.uri = node.keyValue
  }
}

class ViewUndetermined {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.uri = node.keyValue
  }
}

export default ViewableImpression
