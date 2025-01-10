import { chunk } from '../index'

describe('chunk function', () => {
  it('should create chunks of specified size', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  })

  it('should handle arrays that dont divide evenly', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('should handle empty arrays', () => {
    expect(chunk([], 2)).toEqual([])
  })

  it('should handle chunk size larger than array', () => {
    expect(chunk([1, 2], 3)).toEqual([[1, 2]])
  })

  it('should handle chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]])
  })

  it('should preserve element types', () => {
    expect(chunk(['a', 'b', 'c'], 2)).toEqual([['a', 'b'], ['c']])
  })
}) 