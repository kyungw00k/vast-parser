/**
 * Checks if `value` is classified as a `String` primitive.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
export default function isString (value) {
  return typeof value === 'string'
}
