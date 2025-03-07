import { deepMerge } from '../index'

describe('deepMerge function', () => {
  it('should merge objects at root level', () => {
    const target = { a: 1, b: 2 }
    const source = { b: 3, c: 4 }
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should merge nested objects', () => {
    const target = { a: 1, b: { c: 2, d: 3 } }
    const source = { b: { d: 4, e: 5 } }
    expect(deepMerge(target, source)).toEqual({ a: 1, b: { c: 2, d: 4, e: 5 } })
  })

  it('should handle multiple sources', () => {
    const target = { a: 1 }
    const source1 = { b: 2 }
    const source2 = { c: 3 }
    expect(deepMerge(target, source1, source2)).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should handle arrays', () => {
    const target = { a: [1, 2] }
    const source = { a: [3, 4] }
    expect(deepMerge(target, source)).toEqual({ a: [3, 4] })
  })

  it('should handle null and undefined values', () => {
    const target = { a: 1, b: null }
    const source = { b: 2, c: undefined }
    expect(deepMerge(target, source)).toEqual({ a: 1, b: 2, c: undefined })
  })

  it('should not modify the original objects', () => {
    const target = { a: 1, b: { c: 2 } }
    const source = { b: { d: 3 } }
    const result = deepMerge(target, source)
    
    expect(target).toEqual({ a: 1, b: { c: 2 } })
    expect(source).toEqual({ b: { d: 3 } })
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 } })
  })
}) 