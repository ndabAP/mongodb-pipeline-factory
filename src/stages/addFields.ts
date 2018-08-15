import { AddFields } from '../../types'
import each = require('lodash/each')
import set = require('lodash/set')

/**
 * @param {...([string , any])} expressions
 *
 * @returns {any}
 */
const fn: AddFields = (...expressions: Array<[string, any]>[]) => {
  let addFields: any = {$addFields: {}}
  each(expressions, ([field, expression]) => set(addFields.$addFields, field, expression))

  return addFields
}

export default fn