import { deepClone } from '../index'

describe('deepClone function', () => {
  it('should clone nested objects', () => {
    const obj = { a: { b: 2 }, c: 3 }
    const clone = deepClone(obj)
    expect(clone).toEqual(obj)
    expect(clone).not.toBe(obj)
    expect(clone.a).not.toBe(obj.a)
  })

  it('should clone arrays', () => {
    const arr = [{ a: 1 }, { b: 2 }]
    const clone = deepClone(arr)
    expect(clone).toEqual(arr)
    expect(clone[0]).not.toBe(arr[0])
  })

  it('should handle primitive values', () => {
    expect(deepClone(42)).toBe(42)
    expect(deepClone('hello')).toBe('hello')
    expect(deepClone(true)).toBe(true)
    expect(deepClone(null)).toBe(null)
  })

  it('should handle nested arrays', () => {
    const obj = { arr: [1, [2, 3], { a: 4 }] }
    const clone = deepClone(obj)
    expect(clone).toEqual(obj)
    expect(clone.arr[1]).not.toBe(obj.arr[1])
    expect(clone.arr[2]).not.toBe(obj.arr[2])
  })

  it('should handle circular references', () => {
    const obj: any = { a: 1 }
    obj.self = obj
    expect(() => deepClone(obj)).toThrow()
  })
}) 