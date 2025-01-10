import { omit } from '../index'

describe('omit function', () => {
  it('should omit specified properties', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(omit(obj, ['a', 'b'])).toEqual({ c: 3 })
  })

  it('should handle single property', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(omit(obj, ['a'])).toEqual({ b: 2, c: 3 })
  })

  it('should handle empty keys array', () => {
    const obj = { a: 1, b: 2 }
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 })
  })

  it('should handle nested objects', () => {
    const obj = { a: { b: 2 }, c: 3, d: 4 }
    const result = omit(obj, ['c', 'd'])
    expect(result).toEqual({ a: { b: 2 } })
  })

  it('should not modify original object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    omit(obj, ['a'])
    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })
}) 