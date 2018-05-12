import StringNumberNumberTriplet from '../types/StringNumberNumberTriplet'

/**
 * @param {StringNumberNumberTriplet} stringNumberNumberTriplet
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (stringNumberNumberTriplet: StringNumberNumberTriplet, identifier: string): any => {
  return {[identifier]: stringNumberNumberTriplet}
}