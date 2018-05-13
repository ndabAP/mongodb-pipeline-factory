interface And {
  (...expressions: Array<any>): { $and: any }
}

interface Cond {
  (expressions: any): { $cond: any }
}

interface Eq {
  (x: any, y: any): { $eq: [any, any] }
}

interface Filter {
  (input: Array<any>, as: string, cond: any): { $filter: { input: any, as: string, cond: any } }
}

interface Gt {
  (expressions: number | Array<any>): { $gt: number | Array<any> }
}

interface Map {
  (input: any, as: string, op: any): { $map: { input: any, as: string, in: any } }
}

interface Not {
  (expressions: any): { $not: any }
}

interface Or {
  (...expressions: Array<any>): { $or: any }
}

interface Sum {
  (expressions: number | string | Array<any>): { $sum: number | string | Array<any> }
}

interface Size {
  (expressions: any): { $size: any }
}

export { And, Cond, Eq, Filter, Gt, Map, Not, Or, Size, Sum }