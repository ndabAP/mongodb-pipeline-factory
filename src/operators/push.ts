import {Push} from '../../types/operators'

/**
 * @param {any} expression
 *
 * @returns {{$push: any}}
 */
const fn: Push = (expression: any) => ({$push: expression})

export default fn