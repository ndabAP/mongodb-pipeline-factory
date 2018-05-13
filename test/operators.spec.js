import { assert } from 'chai'
import { and, cond, filter, gt, map, or, size, sum } from './../src/index'

describe('Operators', () => {
  describe('And', () => {
    it('should return array with object', () => assert.deepEqual(
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

  describe('Filter', () => {
    it('should return array, string and object', () => assert.deepEqual(
      filter([1, 2, 3], 'number', {}),
      {$filter: {input: [1, 2, 3], as: 'number', cond: {}}}
    ))
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

  describe('map', () => {
    it('should return string, string, object', () => assert.deepEqual(
      map('$scores', 'score', {}),
      {$map: {input: '$scores', as: 'score', in: {}}}
    ))
  })

  describe('Or', () => {
    it('should return array with object', () => assert.deepEqual(
      or([true, true, {}]),
      {$or: [true, true, {}]}
    ))
  })

  describe('Size', () => {
    it('should return string', () => assert.deepEqual(
      size('$colors'),
      {$size: '$colors'}
    ))

    it('should return object', () => assert.deepEqual(
      size({}),
      {$size: {}}
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
