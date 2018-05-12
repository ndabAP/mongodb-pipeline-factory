import ExpressionOrNumber from './../types/ExpressionOrNumber'

/**
 * @param {ExpressionOrNumber} expressionOrNumber
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (expressionOrNumber: ExpressionOrNumber, identifier: string): any => {
  if (Array.isArray(expressionOrNumber)) {
    let pipeline: any = {[identifier]: []}

    const [key, value] = expressionOrNumber
    pipeline[identifier].push(key, value)

    return pipeline
  }

  return {[identifier]: expressionOrNumber}
}
