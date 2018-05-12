import Triplet from './../types/Triplet'
import triplet from './../mixins/triplet'

type Substr = {$substr: Triplet}

/**
 * Example: { $substr: [ "$quarter", 0, 2 ] }
 *
 * @param {Triplet} substr
 *
 * @returns {any}
 */
export default (substr: Triplet): Substr => triplet(substr, '$substr')