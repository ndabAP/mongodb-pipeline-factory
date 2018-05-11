import each = require('lodash/each')
import List from '../types/List'

type And = { $and: List }

/**
 * Example: { $and: [ { $gt: [ "$qty", 250 ] }, { $lt: [ "$qty", 500 ] } ] }
 *
 * @param {List} list
 *
 * @returns {And}
 */
export default (list: List): And => {
  let pipeline: And = {$and: []}
  each(list, item => pipeline.$and.push(item))

  return pipeline
}