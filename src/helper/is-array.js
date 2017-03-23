/**
 * Checks if `value` is classified as a `Array`
 *
 * @param {*} value The value to check.
 * @returns {boolean} Return `true` if `value` is an array, else `false`
 * @example
 *
 * isArray({})
 * // => false
 *
 * isArray([])
 * // => true
 */
export default function isArray (value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
