import { Match } from '../../types'

/**
 * @param expressions
 *
 * @returns {{$match: any}}
 */
const fn: Match = (expressions: any) => ({$match: expressions})

export default fn