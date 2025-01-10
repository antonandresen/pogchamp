import { isPlainObject } from '../index'

describe('isPlainObject function', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ a: 1 })).toBe(true)
    expect(isPlainObject({ a: { b: 2 } })).toBe(true)
  })

  it('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject([1, 2, 3])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false)
  })

  it('should return false for primitive types', () => {
    expect(isPlainObject(42)).toBe(false)
    expect(isPlainObject('string')).toBe(false)
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject(undefined)).toBe(false)
  })

  it('should return false for class instances', () => {
    class TestClass {}
    expect(isPlainObject(new TestClass())).toBe(false)
    expect(isPlainObject(new Date())).toBe(false)
  })
}) 