type Lt = {$lt: any}

/**
 * Example: { $lt: [ "$qty", 250 ] }
 *
 * @param {Array<any> | number} expression
 *
 * @returns {Lt}
 */
export default (expression: Array<any> | number): Lt => {
  if (Array.isArray(expression)) {
    let lt: Lt = {$lt: []}

    const [key, value] = expression
    lt.$lt.push(key, value)

    return lt
  } else {
    return {$lt: expression}
  }
}