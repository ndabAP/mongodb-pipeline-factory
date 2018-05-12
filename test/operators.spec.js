import { assert } from 'chai'
import { substr, cond, size, and, or, gt, lt } from './../src/index'

describe('Operators', () => {
  describe('Substr', () => {
    it('should return substr', () => assert.deepEqual(substr(['$date', 0, 7]), {$substr: ['$date', 0, 7]}))
  })

  describe('Cond', () => {
    it('should return substr', () => assert.deepEqual(cond([true, 'Yes', 'No']), {$cond: [true, 'Yes', 'No']}))
  })

  describe('And', () => {
    it('should return and', () => assert.deepEqual(and([true, false, false]), {$and: [true, false, false]}))
  })

  describe('Size', () => {
    it('should return size', () => assert.deepEqual(size('$colors'), {$size: '$colors'}))
  })

  describe('Or', () => {
    it('should return or', () => assert.deepEqual(or([true, false, false]), {$or: [true, false, false]}))
  })

  describe('Gt', () => {
    it('should return gt array', () => assert.deepEqual(gt(['price', 500]), {$gt: ['price', 500]}))
    it('should return gt', () => assert.deepEqual(gt(500), {$gt: 500}))
  })

  describe('Lt', () => {
    it('should return lt array', () => assert.deepEqual(lt(['price', 500]), {$lt: ['price', 500]}))
    it('should return lt', () => assert.deepEqual(lt(500), {$lt: 500}))
  })
})