import { Or } from '../../types'

/**
 * @param {any} expressions
 *
 * @returns {{$or: any[]}}
 */
const fn: Or = (...expressions: Array<any>) => ({$or: expressions})

export default fn