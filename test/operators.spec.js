import { assert } from 'chai'
import { and, or, gt, sum } from './../src/index'

describe('Operators', () => {
  describe('And', () => {
    it('should return and array', () => assert.deepEqual(
      and([true, true, {}]),
      {$and: [true, true, {}]})
    )
  })

  describe('Or', () => {
    it('should return or array', () => assert.deepEqual(
      or([true, true, {}]),
      {$or: [true, true, {}]}
    ))
  })

  describe('Gt', () => {
    it('should return gt array', () => assert.deepEqual(
      gt(['quantity', 250]),
      {$gt: ['quantity', 250]}
    ))

    it('should return gt number', () => assert.deepEqual(
      gt(250),
      {$gt: 250}
    ))
  })

  describe('Sum', () => {
    it('should return sum string', () => assert.deepEqual(
      sum('$score'),
      {$sum: '$score'}
    ))

    it('should return sum array', () => assert.deepEqual(
      sum(['$score', '$points']),
      {$sum: ['$score', '$points']}
    ))

    it('should return sum number', () => assert.deepEqual(
      sum(1),
      {$sum: 1}
    ))
  })
})
