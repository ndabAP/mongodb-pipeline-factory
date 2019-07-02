import { SortByCount } from '../../types'

/**
 * @param {any} expression
 *
 * @returns {{$sortByCount: any}}
 */
const fn: SortByCount = (expression: any) => ({$sortByCount: expression})

export default fn
