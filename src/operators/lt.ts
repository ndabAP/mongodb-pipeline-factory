import expressionOrNumber from './../mixins/expressionOrNumber'
import ExpressionOrNumber from './../types/ExpressionOrNumber'

type Lt = {$tt: ExpressionOrNumber}

/**
 * Example: { $lt: [ "$qty", 250 ] }
 *
 * @returns {Lt}
 *
 * @param lt
 */
export default (lt: ExpressionOrNumber): Lt => expressionOrNumber(lt, '$lt')