import { Not } from '../../types'

/**
 * @param {Array<any>} expressions
 *
 * @returns {{$not: Array<any>}}
 */
const fn: Not = (expressions: Array<any>) => ({$not: expressions})

export default fn