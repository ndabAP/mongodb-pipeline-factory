import { In } from '../../types'

/**
 * @param {any} expression
 * @param {any} array
 *
 * @returns {{$in: [any, any?]}}
 */
const fn: In = (expression: any, array?: any) => {
  if (typeof array === 'undefined') {
      return { $in: [expression] }
  }

  return { $in: [expression, array] }
}

export default fn