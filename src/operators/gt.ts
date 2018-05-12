import expressionOrNumber from './../mixins/expressionOrNumber'
import ExpressionOrNumber from './../types/ExpressionOrNumber'

type Gt = {$gt: ExpressionOrNumber}

/**
 * Example: { $gt: [ "$qty", 250 ] }
 *
 * @returns {Gt}
 *
 * @param gt
 */
export default (gt: ExpressionOrNumber): Gt => expressionOrNumber(gt, '$gt')