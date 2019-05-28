import {Avg} from '../../types'

/**
 * @param expression
 *
 * @returns {{$avg: any}}
 */
const fn: Avg = (expression: any) => ({$avg: expression})

export default fn