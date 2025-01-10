import { isToday } from '../index'

describe('isToday function', () => {
  it('should return true for current date', () => {
    expect(isToday(new Date())).toBe(true)
  })

  it('should return false for yesterday', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    expect(isToday(yesterday)).toBe(false)
  })

  it('should return false for tomorrow', () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    expect(isToday(tomorrow)).toBe(false)
  })

  it('should handle same day different times', () => {
    const now = new Date()
    const laterToday = new Date(now)
    laterToday.setHours(23, 59, 59)
    expect(isToday(laterToday)).toBe(true)
  })

  it('should handle different years', () => {
    const lastYear = new Date()
    lastYear.setFullYear(lastYear.getFullYear() - 1)
    expect(isToday(lastYear)).toBe(false)
  })
}) 