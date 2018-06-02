import { Gt } from '../../types'

/**
 * @param {any} x
 * @param {number} y
 *
 * @returns {any}
 */
const fn: Gt = (x: any, y?: number) => {
  if (typeof y !== 'undefined') {
    return {$gt: [x, y]}
  }

  return {$gt: x}
}

export default fn