import { assert } from 'chai'
import { group } from './../src/index'

describe('Stages', () => {
  describe('group', () => {
    it('should return group', () => {
      assert.deepEqual(
        group('$title', [['total', {}]]),
        {'$group': {_id: '$title', total: {}}}
      )
    })
  })
})
