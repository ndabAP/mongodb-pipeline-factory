import { Count } from '../../types'

/**
 * @param {String} count
 *
 * @returns {{$count: string}}
 */
const fn: Count = (count: string) => ({$count: count})

export default fn