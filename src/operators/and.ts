import { And } from '../../types'

/**
 * @param {any} expressions
 *
 * @returns {{$and: any[]}}
 */
const fn: And = (...expressions: Array<any>) => ({$and: expressions})

export default fn