import { assert } from 'chai'
import { and, cond, gt, or, sum } from './../src/index'

describe('Operators', () => {
  describe('And', () => {
    it('should return array', () => assert.deepEqual(
      and([true, true, {}]),
      {$and: [true, true, {}]})
    )
  })

  describe('Cond', () => {
    it('should return array', () => assert.deepEqual(
      cond([true, 30, 20]),
      {$cond: [true, 30, 20]})
    )

    it('should return array with object', () => assert.deepEqual(
      cond([{}, 30, 20]),
      {$cond: [{}, 30, 20]})
    )

    it('should return object', () => assert.deepEqual(
      cond({}),
      {$cond: {}})
    )
  })

  describe('Gt', () => {
    it('should return array', () => assert.deepEqual(
      gt(['quantity', 250]),
      {$gt: ['quantity', 250]}
    ))

    it('should return number', () => assert.deepEqual(
      gt(250),
      {$gt: 250}
    ))
  })

  describe('Or', () => {
    it('should return array', () => assert.deepEqual(
      or([true, true, {}]),
      {$or: [true, true, {}]}
    ))
  })

  describe('Sum', () => {
    it('should return string', () => assert.deepEqual(
      sum('$score'),
      {$sum: '$score'}
    ))

    it('should return array', () => assert.deepEqual(
      sum(['$score', '$points']),
      {$sum: ['$score', '$points']}
    ))

    it('should return number', () => assert.deepEqual(
      sum(1),
      {$sum: 1}
    ))
  })
})
