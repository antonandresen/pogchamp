import { formatDate } from '../index'

describe('formatDate function', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-03-15')
    expect(formatDate(date)).toBe('2024-03-15')
  })

  it('should handle single digit months and days', () => {
    const date = new Date('2024-01-05')
    expect(formatDate(date)).toBe('2024-01-05')
  })

  it('should handle last day of month', () => {
    const date = new Date('2023-12-31')
    expect(formatDate(date)).toBe('2023-12-31')
  })

  it('should handle first day of year', () => {
    const date = new Date('2023-01-01')
    expect(formatDate(date)).toBe('2023-01-01')
  })

  it('should throw error for invalid date', () => {
    expect(() => formatDate(new Date('invalid'))).toThrow('Invalid date')
  })

  it('should handle timezone edge cases', () => {
    // Test date near timezone boundary
    const date = new Date('2024-03-15T23:59:59.999Z')
    expect(formatDate(date)).toBe('2024-03-15')
  })

  it('should handle leap years', () => {
    const date = new Date('2024-02-29')
    expect(formatDate(date)).toBe('2024-02-29')
  })
}) 