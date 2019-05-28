import each = require('lodash/each')
import set = require('lodash/set')

import { Project } from '../../types'

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