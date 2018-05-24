import {Skip} from "../../types"

/**
 * @param {number} skip
 *
 * @returns {{$skip: number}}
 */
const fn: Skip = (skip: number) => ({$skip: skip})

export default fn