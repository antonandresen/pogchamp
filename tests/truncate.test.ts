import { truncate } from '../index'

describe('truncate function', () => {
  it('should truncate string when longer than length', () => {
    expect(truncate('hello world', 5)).toBe('he...')
  })

  it('should not truncate string when shorter than length', () => {
    expect(truncate('hello', 10)).toBe('hello')
  })

  it('should handle custom ending', () => {
    expect(truncate('hello world', 7, '!')).toBe('hello !')
  })

  it('should handle empty string', () => {
    expect(truncate('', 5)).toBe('')
  })
}) 