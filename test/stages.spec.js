import { assert } from 'chai'
import { group, match, project, sample, sort, unwind } from './../src/index'

describe('Stages', () => {
  describe('group', () => {
    it('should return object', () => {
      assert.deepEqual(
        group('$title', [['total', {}]]),
        {$group: {_id: '$title', total: {}}}
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
        {$project: {'title': 1, 'author': 0}}
      )
    })
  })

  describe('sample', () => {
    it('should return integer', () => {
      assert.deepEqual(
        sample(1000),
        {$sample: {size: 1000}}
      )
    })
  })

  describe('sort', () => {
    it('should return object', () => {
      assert.deepEqual(
        sort([['age', -1], ['posts', 1]]),
        {$sort: {age: -1, posts: 1}}
      )
    })

    it('should return object and nested object', () => {
      assert.deepEqual(
        sort([['age', {}]]),
        {$sort: {age: {}}}
      )
    })
  })

  describe('unwind', () => {
    it('should return unwind string', () => {
      assert.deepEqual(
        unwind('$sizes'),
        {$unwind: '$sizes'}
      )
    })

    it('should return unwind object', () => {
      assert.deepEqual(
        unwind('$sizes', '$color', true),
        {$unwind: {path: '$sizes', includeArrayIndex: '$color', preserveNullAndEmptyArrays: true}}
      )
    })
  })
})
