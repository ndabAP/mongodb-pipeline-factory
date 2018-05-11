import { assert } from 'chai'
import { or, and, gt } from './../src/index'

describe('Operators', () => {
  describe('Or', () => {
    it('should return or', () => {
      assert.deepEqual(or([true, false, false]), {$or: [true, false, false]})
    })
  })

  describe('And', () => {
    it('should return and', () => {
      assert.deepEqual(and([true, false, false]), {$and: [true, false, false]})
    })
  })

  describe('Gt', () => {
    it('should return gt array', () => {
      assert.deepEqual(gt(['price', 500]), {$gt: ['price', 500]})
    })

    it('should return gt', () => {
      assert.deepEqual(gt(500), {$gt: 500})
    })
  })
})