import { Lookup } from '../../types'

/**
 * @param {string} from 
 * @param {string} localField 
 * @param {string} foreignField 
 * @param {string} as
 * 
 * @returns {{$lookup: {from: string, localField: string, foreignField: string, as: string}}}
 */
const fn: Lookup = (from: string, localField: string, foreignField: string, as: string) => {
  return {
    $lookup: {
      from, localField, foreignField, as
    }
  }
}

export default fn