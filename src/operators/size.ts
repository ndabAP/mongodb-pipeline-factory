import { Size } from '../../types'

/**
 * @param expressions
 *
 * @returns {{$size: any}}
 */
const fn: Size = (expressions: any) => ({$size: expressions})

export default fn