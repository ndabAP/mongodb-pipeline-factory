import booleanOrBooleanLikeOrExpression from '../mixins/booleanOrBooleanLikeOrExpression'
import BooleanOrBooleanLikeOrExpression from '../types/BooleanOrBooleanLikeOrExpression'

type Project = { $project: any }

/**
 * @param {BooleanOrBooleanLikeOrExpression} project
 *
 * @returns {Project}
 */
export default (project: BooleanOrBooleanLikeOrExpression): Project => {
  return booleanOrBooleanLikeOrExpression(project, '$project')
}