import isString from './is-string'

function isEmptyString (str) {
  return isString(str) && str.length === 0
}

export default isEmptyString
