import each = require('lodash/each')
import Expressions from './../types/Expressions'

/**
 * @param {Expressions} expressions
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (expressions: Expressions, identifier: string): any => {
  let pipeline: any = {[identifier]: []}
  each(expressions, expression => pipeline[identifier].push(expression))

  return pipeline
}