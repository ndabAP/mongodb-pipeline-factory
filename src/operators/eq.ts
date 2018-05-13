import { Eq } from '../../types'

/**
 * @param x
 * @param y
 *
 * @returns {{$eq: (any)[]}}
 */
const fn: Eq = (x: any, y: any) => ({$eq: [x, y]})

export default fn