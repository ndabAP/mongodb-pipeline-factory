import each = require('lodash/each')
import List from '../types/List'

type Or = { $or: List }

export default (list: List): Or => {
  let pipeline: Or = {$or: []}
  each(list, item => pipeline.$or.push(item))

  return pipeline
}