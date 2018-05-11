import each = require('lodash/each')
import set = require('lodash/set')
import Dictionary from '../types/Dictionary'

type Project = { $project: any }

/**
 * Example: { $project : { title : 1 , author : 1 } }
 *
 * @param {Dictionary} expression
 *
 * @returns {Project}
 */
export default (expression: Dictionary): Project => {
  let pipeline: Project = {$project: {}}
  each(expression, ([field, expression]) => set(pipeline.$project, field, expression))

  return pipeline
}