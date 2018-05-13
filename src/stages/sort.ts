import {Sort} from '../../types'
import each = require('lodash/each')
import set = require('lodash/set')

/**
 * @param {Array<[string, any]>} expressions
 *
 * @returns {any}
 */
const fn: Sort = (expressions: Array<[string, any]>) => {
  let sort: any = {$sort: {}}
  each(expressions, ([field, order]) => set(sort.$sort, field, order))

  return sort
}

export default fn