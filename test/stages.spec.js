import { assert } from 'chai'
import { addFields, count, group, limit, match, project, sample, skip, sort, unwind } from './../src/index'

describe('Stages', () => {
  describe('AddFields', () => {
    it('should return object with string and object', () => {
      assert.deepEqual(
        addFields(['title', {}], ['author', {}]),
        {$addFields: {'title': {}, 'author': {}}}
      )
    })
  })

  describe('Count', () => {
    it('should return string', () => assert.deepEqual(
      count('score'),
      {$count: 'score'}
    ))
  })

  describe('Group', () => {
    it('should return object', () => {
      assert.deepEqual(
        group('$title', [['total', {}]]),
        {$group: {_id: '$title', total: {}}}
      )
    })
  })

  describe('Limit', () => {
    it('should return number', () => {
      assert.deepEqual(
        limit(5),
        {$limit: 5}
      )
    })
  })

  describe('Match', () => {
    it('should return object', () => {
      assert.deepEqual(
        match({author: 'Dave'}),
        {$match: {author: 'Dave'}}
      )
    })
  })

  describe('Project', () => {
    it('should return object', () => {
      assert.deepEqual(
        project(['title', 1], ['author', 0]),
        {$project: {'title': 1, 'author': 0}}
      )
    })
  })

  describe('Sample', () => {
    it('should return number', () => {
      assert.deepEqual(
        sample(1000),
        {$sample: {size: 1000}}
      )
    })
  })

  describe('Skip', () => {
    it('should return number', () => {
      assert.deepEqual(
        skip(5),
        {$skip: 5}
      )
    })
  })

  describe('Sort', () => {
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

  describe('Unwind', () => {
    it('should return unwind string', () => {
      assert.deepEqual(
        unwind('$sizes'),
        {$unwind: '$sizes'}
      )
    })

    it('should return object', () => {
      assert.deepEqual(
        unwind('$sizes', '$color', true),
        {$unwind: {path: '$sizes', includeArrayIndex: '$color', preserveNullAndEmptyArrays: true}}
      )
    })
  })
})
