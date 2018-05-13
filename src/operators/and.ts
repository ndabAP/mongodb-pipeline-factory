import { And } from '../../types'

/**
 * @param {Array<any>} expressions
 *
 * @returns {{$and: Array<any>}}
 */
const fn: And = (expressions: Array<any>) => ({$and: expressions})

export default fn