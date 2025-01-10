import { random } from '../index'

describe('random function', () => {
  it('should return number within range', () => {
    const result = random(1, 10)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('should handle same min and max', () => {
    expect(random(5, 5)).toBe(5)
  })

  it('should handle negative numbers', () => {
    const result = random(-10, -5)
    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-5)
  })

  it('should handle zero range', () => {
    expect(random(0, 0)).toBe(0)
  })

  it('should generate integers only', () => {
    const result = random(1, 10)
    expect(Number.isInteger(result)).toBe(true)
  })

  it('should throw error for invalid range', () => {
    expect(() => random(10, 5)).toThrow('Minimum value cannot be greater than maximum value')
  })

  it('should throw error for non-finite numbers', () => {
    expect(() => random(Infinity, 10)).toThrow('Parameters must be finite numbers')
    expect(() => random(NaN, 10)).toThrow('Parameters must be finite numbers')
    expect(() => random(1, Infinity)).toThrow('Parameters must be finite numbers')
  })

  it('should handle large ranges', () => {
    const result = random(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    expect(Number.isInteger(result)).toBe(true)
    expect(result).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER)
    expect(result).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER)
  })
}) 