import { assert } from 'chai'
import { project, match } from './../src/index'

describe('Stages', () => {
  describe('project', () => {
    it('should return project', () => {
      assert.deepEqual(project([['title', 1], ['author', 0]]), {'$project': {title: 1, author: 0}})
    })
  })

  describe('match', () => {
    it('should return match', () => {
      assert.deepEqual(match({author: 'dave'}), {$match: {author: 'dave'}})
    })
  })
})