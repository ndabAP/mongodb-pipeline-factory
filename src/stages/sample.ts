import { Sample } from '../../types'

/**
 * @param {number} size
 *
 * @returns {{$sample: {size: number}}}
 */
const fn: Sample = (size: number) => ({$sample: {size: size}})

export default fn