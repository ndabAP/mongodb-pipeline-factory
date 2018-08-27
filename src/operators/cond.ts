import { Cond } from '../../types'

/**
 * @param {any} when
 * @param {any} then
 * @param {any} otherwise
 *
 * @returns {$cond: [when: any, then: any, otherwise: any]}
 */
const fn: Cond = (when: any, then: any, otherwise: any) => ({$cond: [when, then, otherwise]})

export default fn
