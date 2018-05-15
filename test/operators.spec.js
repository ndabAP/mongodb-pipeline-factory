import { assert } from 'chai'
import { and, arrayElemAt, cond, eq, filter, gt, map, not, or, push, size, substr, sum } from './../src/index'

describe('Operators', () => {
  describe('And', () => {
    it('should return array with object', () => assert.deepEqual(
      and(true, true, {}),
      {$and: [true, true, {}]})
    )
  })

  describe('arrayElemAt', () => {
    it('should return array with object and number', () => assert.deepEqual(
      arrayElemAt({}, 1),
      {$arrayElemAt: [{}, 1]})
    )

    it('should return array with array and number', () => assert.deepEqual(
      arrayElemAt([], 1),
      {$arrayElemAt: [[], 1]})
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

  describe('Eq', () => {
    it('should return array', () => assert.deepEqual(
      eq('score', 25),
      {$eq: ['score', 25]}
    ))
  })

  describe('Filter', () => {
    it('should return array, string and object', () => assert.deepEqual(
      filter([1, 2, 3], 'number', {}),
      {$filter: {input: [1, 2, 3], as: 'number', cond: {}}}
    ))

    it('should return string, string and object', () => assert.deepEqual(
      filter('$items', 'item', {}),
      {$filter: {input: '$items', as: 'item', cond: {}}}
    ))
  })

  describe('Gt', () => {
    it('should return array', () => assert.deepEqual(
      gt('quantity', 250),
      {$gt: ['quantity', 250]}
    ))

    it('should return number', () => assert.deepEqual(
      gt(250),
      {$gt: 250}
    ))
  })

  describe('Map', () => {
    it('should return string, string, object', () => assert.deepEqual(
      map('$scores', 'score', {}),
      {$map: {input: '$scores', as: 'score', in: {}}}
    ))
  })

  describe('Not', () => {
    it('should return array', () => assert.deepEqual(
      not([true]),
      {$not: [true]}
    ))

    it('should return object', () => assert.deepEqual(
      not({}),
      {$not: {}}
    ))
  })

  describe('Or', () => {
    it('should return array, true, true object', () => assert.deepEqual(
      or(true, true, {}),
      {$or: [true, true, {}]}
    ))
  })

  describe('Push', () => {
    it('should return object', () => assert.deepEqual(
      push({}),
      {$push: {}}
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

  describe('Substr', () => {
    it('should return array, object, number and number', () => assert.deepEqual(
      substr({}, 1, 2),
      {$substr: [{}, 1, 2]}
    ))

    it('should return array, string, number and number', () => assert.deepEqual(
      substr('$quarter', 0, 2),
      {$substr: ['$quarter', 0, 2]}
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
