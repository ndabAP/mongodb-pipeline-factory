import { Match } from '../../types'

/**
 * @param {any} expressions
 *
 * @returns {{$match: any}}
 */
const fn: Match = (expressions: any) => ({$match: expressions})

export default fn