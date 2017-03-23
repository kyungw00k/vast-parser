class Extension {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    // TODO: If the tag name of child node is in the VAST tag group, then should I serialize it, or leave it as it is?
    // TODO: For example, `Extension` has a child `Tracking` node, then, should I use VASTs` `Tracking` object or not?
    Object.keys(node).forEach((key) => {
      if (key.startsWith('@')) { // if key is attribute
        this[key.substring(1)] = node.attr(key.substring(1))
        // } else if (isValueObject(node[key])) {
        //   this[key] = node[key].keyValue
      } else {
        this[key] = node[key]
      }
    })
  }
}

// function isValueObject (node) {
//   return Object.keys(node).filter((key) => key.startsWith('@')).length < 1 && node.keyValue
// }

export default Extension
