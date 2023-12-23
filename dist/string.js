'use strict';
import { date, dateTime, timeThh, timeThhmm, timeThhmmss, timeTmm, timeTmmss, timeTss, } from './regex';
/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} value - The string to capitalize.
 *
 * @return {string} The capitalized string.
 */
function capitalizeFirstLetter(value) {
    return value[0].toUpperCase() + value.slice(1);
}
/**
 * Checks if a value is a string.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is a string, otherwise false.
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * Matches a string value against a regular expression.
 *
 * @param {UnknownType} value - The value to match against the regular expression.
 * @param {RegExp} regex - The regular expression to use for matching.
 *
 * @return {boolean} - Returns true if there is a match, otherwise false.
 */
function matchRegex(value, regex) {
    if (!isString(value))
        return false;
    const r = new RegExp(regex, 'gi');
    // @ts-expect-error unnecessary warning
    return r.test(value);
}
/**
 * Checks if a value is a valid date string.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is a valid date string, otherwise false.
 */
function isDate(value) {
    return matchRegex(value, date);
}
/**
 * Checks if a value is a valid datetime string.
 *
 * @param {UnknownType} value - The value to check.
 *
 * @return {boolean} Returns true if the value is a valid datetime string, otherwise false.
 */
function isDateTime(value) {
    return matchRegex(value, dateTime);
}
/**
 * Checks if a given value is a valid time string based on the specified format.
 *
 * @param {UnknownType} value - The value to be checked.
 * @param {string} [format='hh:mm:ss'] - The format used to validate the time string.
 *
 * @returns {boolean} - Returns true if the value is a valid time string; otherwise returns false.
 */
function isTime(value, format = 'hh:mm:ss') {
    const formats = {
        'hh:mm:ss': timeThhmmss,
        'hh:mm': timeThhmm,
        hh: timeThh,
        'mm:ss': timeTmmss,
        mm: timeTmm,
        ss: timeTss,
    };
    if (typeof formats[format] === 'undefined') {
        return false;
    }
    return matchRegex(value, formats[format]);
}
/**
 * Converts a value to a boolean.
 *
 * @param {UnknownType} s - The value to convert to a boolean.
 *
 * @return {boolean} - The converted boolean value.
 */
function toBool(s) {
    if (!isString(s))
        return false;
    return !(
    // @ts-expect-error unnecessary warning
    (s === '' || ['0', 'false', 'NaN', 'null', 'undefined'].indexOf(s) >= 0));
}
/**
 * Convert first letter to uppercase
 *
 * @param  {string} _match - matching string
 * @param  {string} character - first letter of word to be uppercase
 *
 * @return {string} Returns the provided letter in uppercase
 */
function toUpperCase(_match, character) {
    return character.toUpperCase();
}
/**
 * Converts a string to camelCase.
 *
 * @param {string} value - The string to convert to camelCase.
 *
 * @return {string} - The converted string in camelCase format.
 */
function toCamelCase(value) {
    if (!isString(value))
        return '';
    return value.trim().replace(/[\W/.+_-]+(.)/g, toUpperCase);
}
/**
 * Converts a string to snake_case.
 *
 * @param {string} value - The string to convert to snake_case.
 *
 * @return {string} - The converted string in snake_case format.
 */
function toSnakeCase(value) {
    if (!isString(value))
        return '';
    return value
        .trim()
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase()
        .replace(/[\W/.+_-]+(.)/g, (_m, c) => {
        return '_' + c;
    });
}
/**
 * Converts a string to PascalCase.
 *
 * @param {string} value - The string to convert to PascalCase.
 *
 * @return {string} - The converted string in PascalCase format.
 */
function toPascalCase(value) {
    if (!isString(value))
        return '';
    value = value.trim().replace(/[\W/.+_-]+(.)/g, toUpperCase);
    return capitalizeFirstLetter(value);
}
/**
 * Converts a camelCase or PascalCase string to kebab-case.
 *
 * @param {string} value - The string to convert to kebab-case.
 *
 * @return {string} - The converted string in kebab-case format.
 */
function toKebabCase(value) {
    if (!isString(value))
        return '';
    return value
        .trim()
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase()
        .replace(/[^a-z0-9-]/gi, '-')
        .replace(/^-+|-+$/g, '');
}
/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} value - The string to capitalize.
 *
 * @return {string} The string with the first letter capitalized.
 */
function ucfirst(value) {
    if (!isString(value))
        return '';
    value = value.trim();
    return capitalizeFirstLetter(value);
}
export { isString, isDate, isDateTime, isTime, toBool, toCamelCase, toKebabCase, toPascalCase, toSnakeCase, ucfirst, };
