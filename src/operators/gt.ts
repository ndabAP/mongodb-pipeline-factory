import { Gt } from '../../types'

/**
 * @param {number | Array<any>} expressions
 *
 * @returns {{$gt: number | Array<any>}}
 */
const fn: Gt = (expressions: number | Array<any>) => ({$gt: expressions})

export default fn