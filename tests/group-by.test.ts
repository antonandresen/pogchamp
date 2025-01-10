import { groupBy } from '../index'

describe('groupBy function', () => {
  it('should group numbers by remainder', () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const result = groupBy(numbers, n => n % 2)
    expect(result).toEqual({
      0: [2, 4, 6],
      1: [1, 3, 5]
    })
  })

  it('should group strings by length', () => {
    const words = ['one', 'two', 'three', 'four']
    const result = groupBy(words, str => str.length)
    expect(result).toEqual({
      3: ['one', 'two'],
      4: ['four'],
      5: ['three']
    })
  })

  it('should handle empty array', () => {
    expect(groupBy([], x => x)).toEqual({})
  })

  it('should handle objects', () => {
    const items = [
      { id: 1, type: 'A' },
      { id: 2, type: 'B' },
      { id: 3, type: 'A' }
    ]
    const result = groupBy(items, item => item.type)
    expect(result).toEqual({
      A: [{ id: 1, type: 'A' }, { id: 3, type: 'A' }],
      B: [{ id: 2, type: 'B' }]
    })
  })
}) 