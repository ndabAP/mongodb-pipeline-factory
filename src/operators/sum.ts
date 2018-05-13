import { Sum } from '../../types'

/**
 * @param {number | string | Array<any>} expressions
 *
 * @returns {{$sum: number | string | Array<any>}}
 */
const fn: Sum = (expressions: number | string | Array<any>) => ({$sum: expressions})

export default fn