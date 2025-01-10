import { isEmail } from '../index'

describe('isEmail function', () => {
  it('should validate correct email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true)
    expect(isEmail('test.name@example.co.uk')).toBe(true)
    expect(isEmail('test+label@example.com')).toBe(true)
  })

  it('should reject invalid email addresses', () => {
    expect(isEmail('test@')).toBe(false)
    expect(isEmail('@example.com')).toBe(false)
    expect(isEmail('test@example')).toBe(false)
    expect(isEmail('test.example.com')).toBe(false)
  })

  it('should handle empty string', () => {
    expect(isEmail('')).toBe(false)
  })

  it('should reject emails with spaces', () => {
    expect(isEmail('test @example.com')).toBe(false)
    expect(isEmail('test@ example.com')).toBe(false)
  })

  it('should handle special characters correctly', () => {
    expect(isEmail('test.name+label@example.com')).toBe(true)
    expect(isEmail('test-name@example.com')).toBe(true)
  })

  it('should reject emails with invalid characters', () => {
    expect(isEmail('test$@example.com')).toBe(false)
    expect(isEmail('test@exam^ple.com')).toBe(false)
  })

  it('should handle unicode domains', () => {
    expect(isEmail('test@münchen.de')).toBe(false)
    expect(isEmail('test@xn--mnchen-3ya.de')).toBe(true)
  })

  it('should validate email length constraints', () => {
    const longLocalPart = 'a'.repeat(65)
    expect(isEmail(`${longLocalPart}@example.com`)).toBe(false)

    const longDomain = 'a'.repeat(256)
    expect(isEmail(`test@${longDomain}.com`)).toBe(false)
  })

  it('should handle edge cases', () => {
    expect(isEmail('test@localhost')).toBe(false)
    expect(isEmail('test.@example.com')).toBe(false)
    expect(isEmail('.test@example.com')).toBe(false)
  })
}) 