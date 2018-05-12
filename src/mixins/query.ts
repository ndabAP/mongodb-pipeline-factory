import Query from '../types/Query'

/**
 * @param {Query} query
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (query: Query, identifier: string): any => ({[identifier]: query})