import each = require('lodash/each')
import set = require('lodash/set')
import BooleanOrBooleanLikeOrExpression from '../types/BooleanOrBooleanLikeOrExpression'

/**
 * @param {BooleanOrBooleanLikeOrExpression} booleanOrBooleanLikeOrExpression
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (booleanOrBooleanLikeOrExpression: BooleanOrBooleanLikeOrExpression, identifier: string): any => {
  let pipeline: any = {[identifier]: {}}
  each(booleanOrBooleanLikeOrExpression, ([field, expression]) => set(pipeline[identifier], field, expression))

  return pipeline
}