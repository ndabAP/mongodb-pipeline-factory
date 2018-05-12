import query from '../mixins/query'
import Query from '../types/Query'

type Match = { $match: any }

/**
 * Example: { $match : { author : "dave" } }
 *
 * @returns {Match}
 *
 * @param match
 */
export default (match: Query): Match => query(match, '$match')