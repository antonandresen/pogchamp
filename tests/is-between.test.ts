import { isBetween } from '../index'

describe('isBetween function', () => {
  it('should return true for number within range', () => {
    expect(isBetween(5, 1, 10)).toBe(true)
  })

  it('should return true for number equal to min', () => {
    expect(isBetween(1, 1, 10)).toBe(true)
  })

  it('should return true for number equal to max', () => {
    expect(isBetween(10, 1, 10)).toBe(true)
  })

  it('should return false for number below min', () => {
    expect(isBetween(0, 1, 10)).toBe(false)
  })

  it('should return false for number above max', () => {
    expect(isBetween(11, 1, 10)).toBe(false)
  })

  it('should handle negative numbers', () => {
    expect(isBetween(-5, -10, -1)).toBe(true)
    expect(isBetween(-11, -10, -1)).toBe(false)
  })

  it('should handle zero in range', () => {
    expect(isBetween(0, -1, 1)).toBe(true)
  })
}) 