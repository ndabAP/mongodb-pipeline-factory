import Expressions from '../types/Expressions'
import expressions from '../mixins/expressions'

type And = { $and: Expressions }

/**
 * Example: { $and: [ { $gt: [ "$qty", 250 ] }, { $lt: [ "$qty", 500 ] } ] }
 *
 * @returns {And}
 *
 * @param and
 */
export default (and: Expressions): And => expressions(and, '$and')