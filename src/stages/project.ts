import each = require('lodash/each')
import set = require('lodash/set')
import Dictionary from '../types/Dictionary'

type Project = { $project: any }

/**
 * Example: db.books.aggregate( [ { $project : { title : 1 , author : 1 } } ] )
 *
 * @param {Dictionary} dictionary
 * @returns {Project}
 */
export default (dictionary: Dictionary): Project => {
  let pipeline: Project = {$project: {}}
  each(dictionary, ([field, expression]) => set(pipeline.$project, field, expression))

  return pipeline
}