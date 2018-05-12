interface Group {
  (_id: any, fields?: Array<[any, any]>): {$group: {}}
}

export {Group}