import { assert } from 'chai'
import { project, match, or, and, lt, gt } from './../src/index'

describe('Mixins', () => {
  it('should return project with or', () => {
    assert.deepEqual(
      project([
        ['title', or([true, false])],
        ['author', 0]
      ]),
      {'$project': {title: {$or: [true, false]}, author: 0}}
    )
  })

  it('should return match with and, gt', () => {
    assert.deepEqual(
      match(
        and([{
          price: {
            ...lt(3000),
            ...gt(2500)
          }
        }])
      ), {'$match': {'$and': [{'price': {'$lt': 3000, '$gt': 2500}}]}})
  })
})