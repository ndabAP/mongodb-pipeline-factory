import { In } from '../../types'

/**
 * @param expression
 * @param array
 *
 * @returns {{$in: (any)[]}}
 */
const fn: In = (expression: any, array: any) => ({$in: [expression, array]})

export default fn