import { Eq } from '../../types'

/**
 * @param {any} x
 * @param {any} y
 *
 * @returns {{$eq: (any)[]}}
 */
const fn: Eq = (x: any, y: any) => ({$eq: [x, y]})

export default fn