import { assert } from 'chai'
import { group, project } from './../src/index'

describe('Stages', () => {
  describe('group', () => {
    it('should return object', () => {
      assert.deepEqual(
        group('$title', [['total', {}]]),
        {'$group': {_id: '$title', total: {}}}
      )
    })
  })

  describe('project', () => {
    it('should return object', () => {
      assert.deepEqual(
        project([['title', 1], ['author', 0]]),
        {'$project': {'title': 1, 'author': 0}}
      )
    })
  })
})
