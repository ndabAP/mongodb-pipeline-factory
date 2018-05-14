import { Gt } from '../../types'

/**
 * @param {string | number} x
 * @param {number} y
 *
 * @returns {any}
 */
const fn: Gt = (x: string | number, y?: number) => {
  if (typeof y !== 'undefined') {
    return {$gt: [x, y]}
  }

  return {$gt: x}
}

export default fn