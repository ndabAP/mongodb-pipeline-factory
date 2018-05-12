import Expressions from '../types/Expressions'
import expressions from '../mixins/expressions'

type Or = { $or: Expressions }

/**
 * Example: { $or: [ { $gt: [ "$qty", 250 ] }, { $lt: [ "$qty", 500 ] } ] }
 *
 * @returns {Or}
 *
 * @param or
 */
export default (or: Expressions): Or => expressions(or, '$or')