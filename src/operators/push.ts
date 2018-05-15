import {Push} from '../../types/operators'

/**
 * @param expression
 *
 * @returns {{$push: any}}
 */
const fn: Push = (expression: any) => ({$push: expression})

export default fn