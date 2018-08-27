import { assert } from 'chai'
import { cond, group, gt, project, sum } from './../src/index'

describe('Mixins', () => {
  it('should return group with sum', () => {
    assert.deepEqual(
      group('$title', [['count', sum(1)]]),
      {$group: {_id: '$title', count: {'$sum': 1}}}
    )
  })

  it('should return project with cond and gt', () => {
    assert.deepEqual(
      project(
        ['item', 1],
        ['discount', cond(
          gt(['$quantity', 250]),
          30,
          20
        )]
      ),
      {$project: {item: 1, discount: {$cond: [{$gt: ['$quantity', 250]}, 30, 20]}}}
    )
  })
})
