import { Cond } from '../../types'

/**
 * @param {[any] | Object} expressions
 *
 * @returns {any}
 */
const fn: Cond = (expressions: [any, any, any] | Object) => {
  let cond: any = {$cond: null}
  cond.$cond = expressions

  return cond
}

export default fn