import { Or } from '../../types'

/**
 * @param {Array<any>} expressions
 *
 * @returns {{$or: Array<any>}}
 */
const fn: Or = (expressions: Array<any>) => ({$or: expressions})

export default fn