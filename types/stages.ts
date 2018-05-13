interface Group {
  (_id: any, fields?: Array<[any, any]>): { $group: {} }
}

interface Match {
  (expressions: any): { $match: {} }
}

interface Project {
  (expressions: [any, any, any] | Object): { $project: {} }
}

interface Sample {
  (size: number): { $sample: { size: number } }
}

interface Sort {
  (expressions: Array<[string, any]>): { $sort: {} }
}

interface Unwind {
  (path: string, includeArrayIndex?: string, preserveNullAndEmptyArrays?: boolean):
    { $unwind: string | { path: string, includeArrayIndex: string, preserveNullAndEmptyArrays: boolean } }
}

export { Group, Match, Project, Sample, Sort, Unwind }