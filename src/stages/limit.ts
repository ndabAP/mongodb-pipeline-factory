import { Limit } from "../../types"

/**
 * @param {number} limit
 *
 * @returns {{$limit: number}}
 */
const fn: Limit = (limit: number) => ({$limit: limit})

export default fn