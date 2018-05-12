import StringNumberNumberTriplet from '../types/StringNumberNumberTriplet'
import stringNumberNumberTriplet from '../mixins/stringNumberNumberTriplet'

type Substr = {$substr: StringNumberNumberTriplet}

/**
 * Example: { $substr: [ "$quarter", 0, 2 ] }
 *
 * @param {AnyTriplet} substr
 *
 * @returns {any}
 */
export default (substr: StringNumberNumberTriplet): Substr => stringNumberNumberTriplet(substr, '$substr')