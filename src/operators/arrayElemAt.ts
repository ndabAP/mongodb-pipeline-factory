import {ArrayElemAt} from '../../types'

/**
 * @param {any} array
 * @param {number} idx
 *
 * @returns {{$arrayElemAt: (any | number)[]}}
 */
const fn: ArrayElemAt = (array: any, idx: number) => ({$arrayElemAt: [array, idx]})

export default fn