export interface Group {
  (_id: any, fields?: Array<[any, any]>): { $group: {} }
}

export interface Limit {
    (limit: number): { $limit: number }
}

export interface Match {
  (expressions: any): { $match: {} }
}

export interface Project {
  (expressions: [any, any, any] | Object): { $project: {} }
}

export interface Sample {
  (size: number): { $sample: { size: number } }
}

export interface Skip {
    (skip: number): { $skip: number }
}

export interface Sort {
  (expressions: Array<[string, any]>): { $sort: {} }
}

export interface Unwind {
  (path: string, includeArrayIndex?: string, preserveNullAndEmptyArrays?: boolean):
    { $unwind: string | { path: string, includeArrayIndex: string, preserveNullAndEmptyArrays: boolean } }
}