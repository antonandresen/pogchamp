import { memoize } from '../index'

describe('memoize function', () => {
  it('should cache function results', () => {
    const fn = jest.fn((a: number, b: number) => a + b)
    const memoized = memoize(fn)

    expect(memoized(1, 2)).toBe(3)
    expect(memoized(1, 2)).toBe(3)
    expect(fn).toBeCalledTimes(1)
  })

  it('should handle different arguments', () => {
    const fn = jest.fn((a: number, b: number) => a + b)
    const memoized = memoize(fn)

    expect(memoized(1, 2)).toBe(3)
    expect(memoized(2, 3)).toBe(5)
    expect(fn).toBeCalledTimes(2)
  })

  it('should use custom key function', () => {
    const fn = jest.fn((obj: { id: number }) => obj.id)
    const memoized = memoize(fn, (obj) => String(obj.id))

    const obj1 = { id: 1 }
    const obj2 = { id: 1 }

    expect(memoized(obj1)).toBe(1)
    expect(memoized(obj2)).toBe(1)
    expect(fn).toBeCalledTimes(1)
  })

  it('should handle complex arguments', () => {
    const fn = jest.fn((arr: number[]) => arr.reduce((a, b) => a + b, 0))
    const memoized = memoize(fn)

    expect(memoized([1, 2, 3])).toBe(6)
    expect(memoized([1, 2, 3])).toBe(6)
    expect(fn).toBeCalledTimes(1)
  })
}) 