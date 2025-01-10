import { unique } from '../index'

describe('unique function', () => {
  it('should remove duplicates from number array', () => {
    expect(unique([1, 1, 2, 2, 3])).toEqual([1, 2, 3])
  })

  it('should remove duplicates from string array', () => {
    expect(unique(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c'])
  })

  it('should handle empty array', () => {
    expect(unique([])).toEqual([])
  })

  it('should handle array with no duplicates', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('should preserve order of first occurrence', () => {
    expect(unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2])
  })

  it('should handle array with all same values', () => {
    expect(unique([1, 1, 1, 1])).toEqual([1])
  })

  it('should handle objects by reference', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 1 }
    const arr = [obj1, obj2, obj1]
    expect(unique(arr)).toEqual([obj1, obj2])
  })

  it('should handle mixed type arrays', () => {
    const arr = [1, '1', true, 1, '1', true]
    expect(unique(arr)).toEqual([1, '1', true])
  })

  it('should handle arrays with null and undefined', () => {
    const arr = [null, undefined, null, 1, undefined]
    expect(unique(arr)).toEqual([null, undefined, 1])
  })

  it('should handle arrays with NaN', () => {
    const arr = [NaN, 1, NaN, 2]
    const result = unique(arr)
    expect(result.length).toBe(3)
    expect(result.filter(x => Number.isNaN(x)).length).toBe(1)
  })
}) 