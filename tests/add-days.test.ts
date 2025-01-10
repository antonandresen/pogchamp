import { addDays } from '../index'

describe('addDays function', () => {
  it('should add positive days', () => {
    const date = new Date('2023-01-15')
    expect(addDays(date, 5).toISOString().split('T')[0]).toBe('2023-01-20')
  })

  it('should add negative days', () => {
    const date = new Date('2023-01-15')
    expect(addDays(date, -5).toISOString().split('T')[0]).toBe('2023-01-10')
  })

  it('should handle month boundaries', () => {
    const date = new Date('2023-01-30')
    expect(addDays(date, 5).toISOString().split('T')[0]).toBe('2023-02-04')
  })

  it('should handle year boundaries', () => {
    const date = new Date('2023-12-30')
    expect(addDays(date, 5).toISOString().split('T')[0]).toBe('2024-01-04')
  })

  it('should not modify original date', () => {
    const date = new Date('2023-01-15')
    const originalTime = date.getTime()
    addDays(date, 5)
    expect(date.getTime()).toBe(originalTime)
  })

  it('should handle adding zero days', () => {
    const date = new Date('2023-01-15')
    expect(addDays(date, 0).toISOString().split('T')[0]).toBe('2023-01-15')
  })
}) 