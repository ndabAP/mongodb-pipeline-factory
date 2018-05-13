interface Group {
  (_id: any, fields?: Array<[any, any]>): { $group: {} }
}

interface Match {
  (expressions: any): { $match: {} }
}

interface Project {
  (expressions: [any, any, any] | Object): { $project: {} }
}

export { Group, Match, Project }