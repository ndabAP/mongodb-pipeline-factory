import { Or } from '../../types/operators'

/**
 * @param {Array<any>} expressions
 *
 * @returns {{$or: Array<any>}}
 */
const fn: Or = (expressions: Array<any>) => ({$or: expressions})

export default fn