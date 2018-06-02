import { Lt } from '../../types'

/**
 * @param {any} x
 * @param {?number} y
 *
 * @returns {any}
 */
const fn: Lt = (x: any, y?: number) => {
  if (typeof y !== 'undefined') {
    return {$lt: [x, y]}
  }

  return {$lt: x}
}

export default fn