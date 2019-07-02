import {Substr} from '../../types'

/**
 * @param {any} expression
 * @param {number} start
 * @param {number} length
 *
 * @returns {{$substr: (any | number)[]}}
 */
const fn: Substr = (expression: any, start: number, length: number) => ({$substr: [expression, start, length]})

export default fn