import {Map} from '../../types/operators'

/**
 * @param input
 * @param {string} as
 * @param op
 *
 * @returns {{$map: {input: any; as: string; in: any}}}
 */
const fn: Map = (input: any, as: string, op: any) => ({$map: {input, as, in: op}})

export default fn