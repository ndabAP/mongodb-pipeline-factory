import each = require('lodash/each')
import List from '../types/List'

type Or = { $or: List }

/**
 * Example: { $or: [ { $gt: [ "$qty", 250 ] }, { $lt: [ "$qty", 200 ] } ] }
 *
 * @param {List} list
 *
 * @returns {Or}
 */
export default (list: List): Or => {
  let pipeline: Or = {$or: []}
  each(list, item => pipeline.$or.push(item))

  return pipeline
}