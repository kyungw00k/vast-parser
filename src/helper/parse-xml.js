/* global ActiveXObject, DOMParser */

/*!
 * https://github.com/MailOnline/videojs-vast-vpaid/blob/master/src/scripts/utils/xml.js
 * MIT License
 */

import isEmptyString from './is-empty-string'

function parseXML (xml, option = {}) {
  if (xml.documentElement != null) {
    return xml.documentElement
  }

  let xmlDocument = null

  // IE 8
  if (typeof DOMParser === 'undefined' && typeof ActiveXObject !== 'undefined') {
    xmlDocument = new ActiveXObject('Microsoft.XMLDOM')
    xmlDocument.async = false
    xmlDocument.loadXML(xml)
    return xmlDocument
  }

  try {
    xmlDocument = parseString(xml, option.DOMParser || DOMParser)
  } catch (e) {
    throw new Error(`Unsupported Environment`)
  }

  return xmlDocument
}

function parseString (xmlString, DOMParser) {
  let parser = new DOMParser()
  let parsedDocument

  // Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an errors but the rest of the browsers don't.
  try {
    parsedDocument = parser.parseFromString(xmlString, 'application/xml')

    if (isEmptyString(xmlString)) {
      throw new Error('empty string')
    }

    if (isParseError(parsedDocument)) {
      throw new Error('xml parse error')
    }
  } catch (e) {
    throw new Error(`Error: ${e.message} from ${xmlString}`)
  }

  return parsedDocument
}

function isParseError (parsedDocument, parserInstance) {
  try { // parser and parserErrorNS could be cached on startup for efficiency
    let erroneousParse = parserInstance.parseFromString('INVALID', 'text/xml')
    let parserErrorNS = erroneousParse.getElementsByTagName('parsererror')[0].namespaceURI

    if (parserErrorNS === 'http://www.w3.org/1999/xhtml') {
      // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
      return parsedDocument.getElementsByTagName('parsererror').length > 0
    }

    return parsedDocument.getElementsByTagNameNS(parserErrorNS, 'parsererror').length > 0
  } catch (e) {
    // Note on IE: parseString throws an errors by itself and it will never reach this code.
    // Because it will have failed before
  }
}

export default parseXML
