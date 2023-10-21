'use strict'

/**
 * @param value
 *
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * @param value
 *
 * @return {boolean}
 */
function isUnsignedNumber(value) {
  return isNumber(value) && value < 4294967296 && value >= 0
}

/**
 * @param value
 *
 * @return {boolean}
 */
function isId(value) {
  return isUnsignedNumber(value) && value > 0
}

export { isId, isNumber, isUnsignedNumber }
