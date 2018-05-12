import Expression from './../types/Expression'
import expression from './../mixins/expression'

type Size = {$size: Expression}

/**
 * @param {Expression} size
 *
 * @returns {Size}
 */
export default (size: Expression): Size => expression(size, '$size')