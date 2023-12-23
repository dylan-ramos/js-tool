'use strict';
/**
 * Checks if a value is a boolean.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is a boolean, otherwise false.
 */
function isBool(value) {
    return typeof value === 'boolean';
}
export { isBool };
