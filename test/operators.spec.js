import { assert } from 'chai'
import { or, and, gt, lt } from './../src/index'

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

  describe('Lt', () => {
    it('should return lt array', () => {
      assert.deepEqual(lt(['price', 500]), {$lt: ['price', 500]})
    })

    it('should return lt', () => {
      assert.deepEqual(lt(500), {$lt: 500})
    })
  })
})