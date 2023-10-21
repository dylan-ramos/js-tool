'use strict'

import {
  date,
  dateTime,
  timeThh,
  timeThhmm,
  timeThhmmss,
  timeTmm,
  timeTmmss,
  timeTss,
} from './regex'

/**
 * @param value
 *
 * @return {boolean}
 */
function isString(value) {
  return typeof value === 'string'
}

/**
 * @param value
 *
 * @return {boolean}
 */
function isDate(value) {
  if (!isString(value)) {
    return false
  }

  const r = new RegExp(date, 'gi')

  return !!r.test(value)
}

/**
 * @param value
 *
 * @return {boolean}
 */
function isDateTime(value) {
  if (!isString(value)) {
    return false
  }

  const r = new RegExp(dateTime, 'gi')

  return !!r.test(value)
}

/**
 * @param value
 * @param {"hh:mm:ss", "hh:mm", "hh", "mm:ss", "mm", "ss"} format
 *
 * @return {boolean}
 */
function isTime(value, format = 'hh:mm:ss') {
  if (!isString(value)) {
    return false
  }

  const a = {
    'hh:mm:ss': timeThhmmss,
    'hh:mm': timeThhmm,
    hh: timeThh,
    'mm:ss': timeTmmss,
    mm: timeTmm,
    ss: timeTss,
  }

  if (a[format] === undefined) {
    return false
  }

  const r = new RegExp(a[format], 'gi')

  return !!r.test(value)
}

/**
 * @param {string} s
 *
 * @return {boolean}
 */
function toBool(s) {
  if (!isString(s)) return false

  return !(
    s === '' || ['0', 'false', 'NaN', 'null', 'undefined'].indexOf(s) >= 0
  )
}

/**
 * @param {string} s
 *
 * @return {string} The string in camel case
 */
function toCamelCase(s) {
  if (!isString(s)) return ''

  return s.trim().replace(/[\W/.+_-]+(.)/g, (m, c) => {
    return c.toUpperCase()
  })
}

/**
 * @param {string} s
 *
 * @return {string} The string in snake case
 */
function toSnakeCase(s) {
  if (!isString(s)) return ''

  return s
    .trim()
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase()
    .replace(/[\W/.+_-]+(.)/g, (m, c) => {
      return '_' + c
    })
}

/**
 * @param {string} s
 *
 * @return {string} The string in pascal case
 */
function toPascalCase(s) {
  if (!isString(s)) return ''

  s = s.trim().replace(/[\W/.+_-]+(.)/g, (m, c) => {
    return c.toUpperCase()
  })

  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * @param {string} s
 *
 * @return {string} The string in snake case
 */
function toKebabCase(s) {
  if (!isString(s)) return ''

  return s
    .trim()
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()
    .replace(/[\W/.+_-]+(.)/g, (m, c) => {
      return '-' + c
    })
}

/**
 * @param {string} s
 *
 * @return {string}
 */
function ucfirst(s) {
  if (!isString(s)) return ''

  s = s.trim()

  return s.charAt(0).toUpperCase() + s.slice(1)
}

export {
  isString,
  isDate,
  isDateTime,
  isTime,
  toBool,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  ucfirst,
}
