/**
 * Checks if `value` is not `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Return `true` if `value` is not `undefined`, else `false`
 * @example
 *
 * isDefined(0)
 * // => false
 *
 * isDefined()
 * // => false
 */
export default function isDefined (value) {
  return value !== undefined
}
