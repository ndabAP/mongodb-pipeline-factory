type Gt = {$gt: Array<any> | number}

/**
 * Example: { $gt: [ "$qty", 250 ] }
 *
 * @param {Array<any> | number} expression
 *
 * @returns {Gt}
 */
export default (expression: Array<any> | number): Gt => {
  if (Array.isArray(expression)) {
    let gt: any = {$gt: []}

    const [key, value] = expression
    gt.$gt.push(key, value)

    return gt
  } else {
    return {$gt: expression}
  }
}