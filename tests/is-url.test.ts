import { isUrl } from '../index'

describe('isUrl function', () => {
  it('should validate correct URLs', () => {
    expect(isUrl('https://example.com')).toBe(true)
    expect(isUrl('http://localhost:3000')).toBe(true)
    expect(isUrl('https://sub.example.com/path?query=1')).toBe(true)
  })

  it('should reject invalid URLs', () => {
    expect(isUrl('not-a-url')).toBe(false)
    expect(isUrl('http://')).toBe(false)
    expect(isUrl('example.com')).toBe(false)
  })

  it('should handle empty string', () => {
    expect(isUrl('')).toBe(false)
  })

  it('should validate URLs with different protocols', () => {
    expect(isUrl('ftp://example.com')).toBe(true)
    expect(isUrl('ws://example.com')).toBe(true)
  })

  it('should handle URLs with special characters', () => {
    expect(isUrl('https://example.com/path?name=test&id=123')).toBe(true)
    expect(isUrl('https://example.com/path#section')).toBe(true)
  })
}) 