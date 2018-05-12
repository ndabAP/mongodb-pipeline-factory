interface And {
  (expressions: Array<any>): {$and: any}
}
interface Or {
  (expressions: Array<any>): {$or: any}
}
interface Gt {
  (expressions: number | Array<any>): {$gt: number | Array<any>}
}
interface Sum {
  (expressions: number | string | Array<any>): {$sum: number | string | Array<any>}
}

export { And, Or, Gt, Sum }