import { pick } from '../index'

describe('pick function', () => {
  it('should pick specified properties', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(pick(obj, ['a', 'b'])).toEqual({ a: 1, b: 2 })
  })

  it('should handle single property', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(pick(obj, ['a'])).toEqual({ a: 1 })
  })

  it('should handle empty keys array', () => {
    const obj = { a: 1, b: 2 }
    expect(pick(obj, [])).toEqual({})
  })

  it('should handle nested objects', () => {
    const obj = { a: { b: 2 }, c: 3 }
    const result = pick(obj, ['a'])
    expect(result).toEqual({ a: { b: 2 } })
  })

  it('should not modify original object', () => {
    const obj = { a: 1, b: 2 }
    pick(obj, ['a'])
    expect(obj).toEqual({ a: 1, b: 2 })
  })
}) 