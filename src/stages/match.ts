import Query from '../types/Query'

type Match = { $match: any }

/**
 * Example: { $match : { author : "dave" } }
 *
 * @param {Query} query
 *
 * @returns {Match}
 */
export default (query: Query): Match => {
  return {$match: query}
}