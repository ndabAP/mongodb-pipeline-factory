import ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet from '../types/ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet'
import expressionOrBooleanOrBooleanLikeAnyAnyTriplet from '../mixins/expressionOrBooleanOrBooleanLikeAnyAnyTriplet'

type Cond = {$cond: ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet}

/**
 * Example: { $cond: { if: { $gte: [ "$qty", 250 ] }, then: 30, else: 20 } }
 *
 * @param {ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet} cond
 *
 * @returns {Cond}
 */
export default (cond: ExpressionOrBooleanOrBooleanLikeAnyAnyTriplet): Cond => {
  return expressionOrBooleanOrBooleanLikeAnyAnyTriplet(cond, '$cond')
}