import { assert } from 'chai'
import { group, match, project } from './../src/index'

describe('Stages', () => {
  describe('group', () => {
    it('should return object', () => {
      assert.deepEqual(
        group('$title', [['total', {}]]),
        {'$group': {_id: '$title', total: {}}}
      )
    })
  })

  describe('match', () => {
    it('should return object', () => {
      assert.deepEqual(
        match({author: 'Dave'}),
        {$match: {author: 'Dave'}}
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
