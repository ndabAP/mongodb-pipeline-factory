import {Push} from '../../types'

/**
 * @param expression
 *
 * @returns {{$push: any}}
 */
const fn: Push = (expression: any) => ({$push: expression})

export default fn