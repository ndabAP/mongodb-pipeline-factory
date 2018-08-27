export interface And {
  (...expressions: Array<any>): { $and: any }
}

export interface ArrayElemAt {
  (array: any, idx: number): { $arrayElemAt: [any, number] }
}

export interface Avg {
    (expression: any): { $avg: any }
}

export interface Cond {
  (when: any, then: any, otherwise: any): { $cond: [any, any, any] }
}

export interface Eq {
  (x: any, y: any): { $eq: [any, any] }
}

export interface Filter {
  (input: Array<any> | string, as: string, cond: any):
    { $filter: { input: Array<any> | string, as: string, cond: any } }
}

export interface Gt {
  (expression: any, y?: number): { $gt: any }
}

export interface In {
  (expression: any, array: any): { $in: [any, any] }
}

export interface Lt {
  (expression: any, y?: number): { $lt: any }
}

export interface Map {
  (input: any, as: string, op: any): { $map: { input: any, as: string, in: any } }
}

export interface Ne {
    (x: any, y: any): { $ne: [any, any] }
}

export interface Not {
  (expressions: any): { $not: any }
}

export interface Or {
  (...expressions: Array<any>): { $or: any }
}

export interface Push {
  (expression: any): { $push: any }
}

export interface Substr {
  (expression: any, start: number, length: number): { $substr: [any, number, number] }
}

export interface Sum {
  (expressions: number | string | Array<any>): { $sum: number | string | Array<any> }
}

export interface Size {
  (expressions: any): { $size: any }
}
