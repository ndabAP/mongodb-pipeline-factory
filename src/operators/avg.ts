import {Avg} from "../../types/operators"

/**
 * @param {any} expression
 *
 * @returns {{$avg: any}}
 */
const fn: Avg = (expression: any) => ({$avg: expression})

export default fn