import { Ne } from '../../types'

/**
 * @param {any} x
 * @param {any} y
 *
 * @returns {{$ne: (any)[]}}
 */
const fn: Ne = (x: any, y: any) => ({$ne: [x, y]})

export default fn