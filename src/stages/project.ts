import { Project } from '../../types'
import each = require('lodash/each')
import set = require('lodash/set')

/**
 * @param {...([string , any])} expressions
 *
 * @returns {any}
 */
const fn: Project = (...expressions: Array<[string, any]>[]) => {
  let project: any = {$project: {}}
  each(expressions, ([field, expression]) => set(project.$project, field, expression))

  return project
}

export default fn