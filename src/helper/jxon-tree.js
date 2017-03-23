/*!
 * https://github.com/MailOnline/videojs-vast-vpaid/blob/master/src/scripts/utils/xml.js
 * MIT License
 */

import isISO8601 from './is-iso8601'
import parseXML from './parse-xml'

class JXONTree {
  constructor (oXMLParent) {

    // The document object is an especial object that it may miss some functions or attrs depending on the browser.
    // To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on
    // all supported browsers.
    if (oXMLParent.documentElement) {
      return new JXONTree(oXMLParent.documentElement)
    }

    if (oXMLParent.hasChildNodes()) {
      let sCollectedTxt = ''
      for (let oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
        oNode = oXMLParent.childNodes.item(nItem)
        /* jshint bitwise: false */
        if ((oNode.nodeType - 1 | 1) === 3) {
          sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue
        }
        else if (oNode.nodeType === 1 && !oNode.prefix) {
          sProp = decapitalize(oNode.nodeName)
          vContent = new JXONTree(oNode)
          if (this.hasOwnProperty(sProp)) {
            if (this[sProp].constructor !== Array) {
              this[sProp] = [this[sProp]]
            }
            this[sProp].push(vContent)
          } else {
            this[sProp] = vContent
          }
        }
      }
      if (sCollectedTxt) {
        this.keyValue = parseText(sCollectedTxt)
      }
    }

    // IE8 Stupid fix
    let hasAttr = typeof oXMLParent.hasAttributes === 'undefined' ? oXMLParent.attributes.length > 0 : oXMLParent.hasAttributes()
    if (hasAttr) {
      for (let nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
        let oAttrib = oXMLParent.attributes.item(nAttrib)
        this['@' + decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim())
      }
    }
  }

  attr (str) {
    return this['@' + decapitalize(str)]
  }
}

JXONTree.fromXML = function (xml, option = {}) {
  return [parseXML(xml, option)].map((doc) => new JXONTree(doc)).shift()
}

function parseText (sValue) {
  if (/^\s*$/.test(sValue)) {
    return null
  }

  if (/^(?:true|false)$/i.test(sValue)) {
    return sValue.toLowerCase() === 'true'
  }

  if (isFinite(sValue)) {
    return parseFloat(sValue)
  }

  if (isISO8601(sValue)) {
    return new Date(sValue)
  }

  return sValue.trim()
}

function decapitalize (s) {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

export default JXONTree
