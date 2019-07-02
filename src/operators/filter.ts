import { Filter } from '../../types'

/**
 * @param {Array<any> | string} input
 * @param {string} as
 * @param {any} cond
 *
 * @returns {{$filter: {input: Array<any> | string; as: string; cond: any}}}
 */
const fn: Filter = (input: Array<any> | string, as: string, cond: any) => ({$filter: {input, as, cond}})

export default fn