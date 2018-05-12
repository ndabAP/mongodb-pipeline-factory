import QueryString from '../types/QueryString'

/**
 * @param {QueryString} queryString
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (queryString: QueryString, identifier: string): any => ({[identifier]: queryString})