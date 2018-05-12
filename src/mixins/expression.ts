import Expression from './../types/Expression'

/**
 * @param {Expression} expression
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (expression: Expression, identifier: string): any => ({[identifier]: expression})