import {Avg} from "../../types/operators"

/**
 * @param expression
 *
 * @returns {{$avg: any}}
 */
const fn: Avg = (expression: any) => ({$avg: expression})

export default fn