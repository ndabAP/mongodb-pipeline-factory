import { Filter } from '../../types'

/**
 * @param {Array<any>} input
 * @param {string} as
 * @param cond
 * @returns {{$filter: {input: Array<any>; as: string; cond: any}}}
 */
const fn: Filter = (input: Array<any>, as: string, cond: any) => ({$filter: {input, as, cond}})

export default fn