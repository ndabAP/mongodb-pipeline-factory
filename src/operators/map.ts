import { Map } from '../../types'

/**
 * @param {any} input
 * @param {string} as
 * @param {any} op
 *
 * @returns {{$map: {input: any; as: string; in: any}}}
 */
const fn: Map = (input: any, as: string, op: any) => ({$map: {input, as, in: op}})

export default fn