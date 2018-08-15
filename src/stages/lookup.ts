import { Lookup } from '../../types'

const fn: Lookup = (from: string, localField: string, foreignField: string, as: string) => {
  return {
    $lookup: {
      from, localField, foreignField, as
    }
  }
}

export default fn