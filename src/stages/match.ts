import {Match} from '../../types/stages'

/**
 * @param expressions
 *
 * @returns {{$match: any}}
 */
const fn: Match = (expressions: any) => ({$match: expressions})

export default fn