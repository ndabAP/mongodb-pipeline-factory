import { assert } from 'chai'
import { project, match, count, substr } from './../src/index'

describe('Stages', () => {
  describe('project', () => {
    it('should return project', () => {
      assert.deepEqual(project([['title', 1], ['author', 0]]), {'$project': {title: 1, author: 0}})
    })

    it('should return project with additional fields', () => {
      assert.deepEqual(
        project([['title', 1], ['author', {
          identifier: substr(['$author', 0, 3])
        }]]),
        {
          '$project': {title: 1, author: {identifier: {$substr: ['$author', 0, 3]}}}
        }
      )
    })
  })

  describe('match', () => {
    it('should return match', () => assert.deepEqual(match({author: 'dave'}), {$match: {author: 'dave'}}))

    it('should return multiple match', () => {
      assert.deepEqual(match({author: 'dave', 'books': 5}), {$match: {author: 'dave', books: 5}})
    })
  })

  describe('count', () => {
    it('should return count', () => assert.deepEqual(count('scores'), {$count: 'scores'}))
  })
})