import { assert } from 'chai'
import { project, or } from './../src/index'

describe('Stages', () => {
  describe('project', () => {
    it('should return project', () => {
      assert.deepEqual(project([['title', 1], ['author', 0]]), {'$project': {title: 1, author: 0}})
    })
  })
})

describe('Operators', () => {
  describe('Or', () => {
    it('should return or', () => {
      assert.deepEqual(or([true, false, false]), {$or: [true, false, false]})
    })
  })
})

describe('Mixed', () => {
  it('should return project with or', () => {
    assert.deepEqual(
      project([
        ['title', or([true, false])],
        ['author', 0]
      ]),
      {'$project': {title: {$or: [true, false]}, author: 0}}
    )
  })
})