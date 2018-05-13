import { Or } from '../../types'

/**
 * @param expressions
 *
 * @returns {{$or: any[]}}
 */
const fn: Or = (...expressions: Array<any>) => ({$or: expressions})

export default fn