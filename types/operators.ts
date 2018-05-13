interface And {
  (expressions: Array<any>): {$and: any}
}
interface Cond {
  (expressions: any): {$cond: any}
}
interface Gt {
  (expressions: number | Array<any>): {$gt: number | Array<any>}
}
interface Or {
  (expressions: Array<any>): {$or: any}
}
interface Sum {
  (expressions: number | string | Array<any>): {$sum: number | string | Array<any>}
}

export { And, Cond, Gt, Or, Sum, }