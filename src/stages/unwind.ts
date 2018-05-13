import { Unwind } from '../../types/stages'

/**
 * @param {string} path
 * @param {string} includeArrayIndex
 * @param {boolean} preserveNullAndEmptyArrays
 *
 * @returns {any}
 */
const fn: Unwind = (path: string, includeArrayIndex?: string, preserveNullAndEmptyArrays?: boolean) => {
  let unwind: any = {$unwind: null}
  if (includeArrayIndex && preserveNullAndEmptyArrays) {
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