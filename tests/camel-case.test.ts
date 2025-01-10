import { camelCase } from '../index'

describe('camelCase function', () => {
  it('should convert space-separated words', () => {
    expect(camelCase('hello world')).toBe('helloWorld')
  })

  it('should handle hyphenated words', () => {
    expect(camelCase('hello-world')).toBe('helloWorld')
  })

  it('should handle underscore separated words', () => {
    expect(camelCase('hello_world')).toBe('helloWorld')
  })

  it('should handle multiple separators', () => {
    expect(camelCase('hello_world-test space')).toBe('helloWorldTestSpace')
  })

  it('should handle already camelCased strings', () => {
    expect(camelCase('helloWorld')).toBe('helloWorld')
  })

  it('should handle empty string', () => {
    expect(camelCase('')).toBe('')
  })
}) 