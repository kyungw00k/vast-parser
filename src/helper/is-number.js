/**
 * Checks if `value` is classified as a `Number` primitive.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
export default function isNumber (value) {
  return typeof value === 'number'
}