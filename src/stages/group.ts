import {Group} from '../../types/stages'
import each = require('lodash/each')
import set = require('lodash/set')

/**
 * @param _id
 * @param {Array<[any]>} fields
 *
 * @returns {any}
 */
const fn: Group = (_id: any, fields: Array<[any, any]>) => {
  let group: any = {$group: { _id }}
  each(fields, ([field, expression]) => set(group.$group, field, expression))

  return group
}

export default fn