import {Avg} from '../../types'

/**
 * @param {any} expression
 *
 * @returns {{$avg: any}}
 */
const fn: Avg = (expression: any) => ({$avg: expression})

export default fn