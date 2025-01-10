import { round } from '../index'

describe('round function', () => {
  it('should round to specified decimals', () => {
    expect(round(3.14159, 2)).toBe(3.14)
  })

  it('should use default of 2 decimals', () => {
    expect(round(3.14159)).toBe(3.14)
  })

  it('should handle zero decimals', () => {
    expect(round(3.14159, 0)).toBe(3)
  })

  it('should handle negative numbers', () => {
    expect(round(-3.14159, 2)).toBe(-3.14)
  })

  it('should round up correctly', () => {
    expect(round(3.145, 2)).toBe(3.15)
  })

  it('should handle already rounded numbers', () => {
    expect(round(3.14, 2)).toBe(3.14)
  })

  it('should handle large numbers of decimals', () => {
    expect(round(3.14159, 4)).toBe(3.1416)
  })
}) 