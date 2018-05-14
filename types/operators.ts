export interface And {
  (...expressions: Array<any>): { $and: any }
}

export interface Cond {
  (expressions: any): { $cond: any }
}

export interface Eq {
  (x: any, y: any): { $eq: [any, any] }
}

export interface Filter {
  (input: Array<any> | string, as: string, cond: any):
    { $filter: { input: Array<any> | string, as: string, cond: any } }
}

export interface Gt {
  (x: string | number, y?: number): { $gt: any }
}

export interface Map {
  (input: any, as: string, op: any): { $map: { input: any, as: string, in: any } }
}

export interface Not {
  (expressions: any): { $not: any }
}

export interface Or {
  (...expressions: Array<any>): { $or: any }
}

export interface Sum {
  (expressions: number | string | Array<any>): { $sum: number | string | Array<any> }
}

export interface Size {
  (expressions: any): { $size: any }
}