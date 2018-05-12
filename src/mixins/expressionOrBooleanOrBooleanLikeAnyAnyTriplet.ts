import ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet from '../types/ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet'

/**
 * @param {ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet} expressionOrBooleanOrBooleanLikeAnyAnyTriplet
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (
  expressionOrBooleanOrBooleanLikeAnyAnyTriplet: ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet,
  identifier: string
): any => ({[identifier]: expressionOrBooleanOrBooleanLikeAnyAnyTriplet})