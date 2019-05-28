import { Unwind } from '../../types'

/**
 * @param {string} path
 * @param {string} includeArrayIndex
 * @param {boolean} preserveNullAndEmptyArrays
 *
 * @returns {any}
 */
const fn: Unwind = (path: string, includeArrayIndex?: string, preserveNullAndEmptyArrays?: boolean) => {
  let unwind: any = {$unwind: null}
  if (includeArrayIndex && typeof preserveNullAndEmptyArrays !== 'undefined') {
    unwind.$unwind = {
      path,
      includeArrayIndex,
      preserveNullAndEmptyArrays
    }

    return unwind
  }

  unwind.$unwind = path

  return unwind
}

export default fn