import { assert } from 'chai'
import {
  and,
  arrayElemAt,
  avg,
  cond,
  eq,
  filter,
  gt,
  inOperator,
  lt,
  map,
  ne,
  not,
  or,
  push,
  size,
  substr,
  sum,
} from './../src/index'

describe('Operators', () => {
  describe('And', () => {
    it('should return array with boolean, boolean, object', () => assert.deepEqual(
      and(true, true, {}),
      {$and: [true, true, {}]}),
    )
  })

  describe('ArrayElemAt', () => {
    it('should return array with object and number', () => assert.deepEqual(
      arrayElemAt({}, 1),
      {$arrayElemAt: [{}, 1]}),
    )

    it('should return array with array and number', () => assert.deepEqual(
      arrayElemAt([], 1),
      {$arrayElemAt: [[], 1]}),
    )
  })

  describe('Avg', () => {
    it('should return object', () => assert.deepEqual(
      avg({}),
      {$avg: {}}),
    )

    it('should return string', () => assert.deepEqual(
      avg('$price'),
      {$avg: '$price'}),
    )
  })

  describe('Cond', () => {
    it('should return array with boolean, number, number', () => assert.deepEqual(
      cond([true, 30, 20]),
      {$cond: [true, 30, 20]})
    )

    it('should return array with object, number, number', () => assert.deepEqual(
      cond([{}, 30, 20]),
      {$cond: [{}, 30, 20]})
    )

    it('should return object', () => assert.deepEqual(
      cond({}),
      {$cond: {}})
    )
  })

  describe('Eq', () => {
    it('should return array with string, number', () => assert.deepEqual(
      eq('score', 25),
      {$eq: ['score', 25]}
    ))
  })

  describe('Filter', () => {
    it('should return array, string and object', () => assert.deepEqual(
      filter([1, 2, 3], 'number', {}),
      {$filter: {input: [1, 2, 3], as: 'number', cond: {}}}
    ))

    it('should return object with string, string, object', () => assert.deepEqual(
      filter('$items', 'item', {}),
      {$filter: {input: '$items', as: 'item', cond: {}}}
    ))
  })

  describe('Gt', () => {
    it('should return array with string, number', () => assert.deepEqual(
      gt('quantity', 250),
      {$gt: ['quantity', 250]}
    ))

    it('should return number', () => assert.deepEqual(
      gt(250),
      {$gt: 250}
    ))
  })

  describe('In', () => {
    it('should return array string, string', () => assert.deepEqual(
      inOperator('quantity', '$products'),
      {$in: ['quantity', '$products']}
    ))
  })

  describe('Lt', () => {
    it('should return array', () => assert.deepEqual(
      lt('quantity', 250),
      {$lt: ['quantity', 250]}
    ))

    it('should return number', () => assert.deepEqual(
      lt(250),
      {$lt: 250}
    ))
  })

  describe('Map', () => {
    it('should return object with string, string, object', () => assert.deepEqual(
      map('$scores', 'score', {}),
      {$map: {input: '$scores', as: 'score', in: {}}}
    ))
  })

  describe('Ne', () => {
    it('should return array with string, number', () => assert.deepEqual(
      ne('score', 25),
      {$ne: ['score', 25]}
    ))
  })

  describe('Not', () => {
    it('should return array with boolean', () => assert.deepEqual(
      not([true]),
      {$not: [true]}
    ))

    it('should return object', () => assert.deepEqual(
      not({}),
      {$not: {}}
    ))
  })

  describe('Or', () => {
    it('should return array with boolean, boolean, object', () => assert.deepEqual(
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
    it('should return array with object, number, number', () => assert.deepEqual(
      substr({}, 1, 2),
      {$substr: [{}, 1, 2]}
    ))

    it('should return array with string, number, number', () => assert.deepEqual(
      substr('$quarter', 0, 2),
      {$substr: ['$quarter', 0, 2]}
    ))
  })

  describe('Sum', () => {
    it('should return string', () => assert.deepEqual(
      sum('$score'),
      {$sum: '$score'}
    ))

    it('should return array with string, string', () => assert.deepEqual(
      sum(['$score', '$points']),
      {$sum: ['$score', '$points']}
    ))

    it('should return number', () => assert.deepEqual(
      sum(1),
      {$sum: 1}
    ))
  })
})
