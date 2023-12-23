'use strict'

import type { UnknownType } from './types/global'

/**
 * The maximum value of an integer in JavaScript.
 */
const MAX_INT_VALUE = Number.MAX_SAFE_INTEGER

/**
 * Checks if a value is a number.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is a number, otherwise false.
 */
function isNumber(value: UnknownType): boolean {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Helper function to check if a value is a number and within a specific range.
 *
 * @param {UnknownType} value - The value to check.
 * @param {number} min - Minimum limit.
 * @param {number} max - Maximum limit.
 *
 * @return {boolean} Returns true if the value is within the range, otherwise false.
 */
function numberInRange(value: UnknownType, min: number, max: number): boolean {
  // @ts-expect-error unnecessary warning
  return isNumber(value) && value < max && value >= min
}

/**
 * Checks if a value is an unsigned number.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is an unsigned number, otherwise false.
 */
function isUnsignedNumber(value: UnknownType): boolean {
  return numberInRange(value, 0, MAX_INT_VALUE)
}

/**
 * Checks if a value is an ID.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is an ID, otherwise false.
 */
function isId(value: UnknownType): boolean {
  return numberInRange(value, 1, MAX_INT_VALUE)
}

export { isId, isNumber, isUnsignedNumber }
