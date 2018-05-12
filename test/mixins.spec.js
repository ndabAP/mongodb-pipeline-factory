import { assert } from 'chai'
import { group, gt, sum } from './../src/index'

describe('Mixins', () => {
  it('should return group with sum', () => {
    assert.deepEqual(
      group('$title', [['count', sum(1)]]),
      {'$group': {_id: '$title', count: {'$sum': 1}}}
    )
  })
})