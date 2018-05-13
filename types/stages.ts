interface Group {
  (_id: any, fields?: Array<[any, any]>): {$group: {}}
}
interface Project {
  (expressions: [any, any, any] | Object): {$project: {}}
}

export {Group, Project}