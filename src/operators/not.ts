import { Not } from '../../types'

/**
 * @param {any} expressions
 *
 * @returns {{$not: any}}
 */
const fn: Not = (expressions: any) => ({$not: expressions})

export default fn