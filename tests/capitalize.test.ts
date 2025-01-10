import { capitalize } from '../index'

describe('capitalize function', () => {
  it('should capitalize a single lowercase word', () => {
    const result = capitalize('hello')
    expect(result).toBe('Hello')
  })

  it('should capitalize multiple words', () => {
    const result = capitalize('hello world')
    expect(result).toBe('Hello World')
  })

  it('should handle already capitalized words correctly', () => {
    const result = capitalize('Hello World')
    expect(result).toBe('Hello World')
  })

  it('should handle mixed case words', () => {
    const result = capitalize('hElLo WoRlD')
    expect(result).toBe('Hello World')
  })

  it('should handle empty string', () => {
    const result = capitalize('')
    expect(result).toBe('')
  })

  it('should handle single character', () => {
    const result = capitalize('a')
    expect(result).toBe('A')
  })

  it('should handle multiple spaces between words', () => {
    const result = capitalize('hello    world')
    expect(result).toBe('Hello    World')
  })

  it('should handle leading and trailing spaces', () => {
    const result = capitalize('  hello world  ')
    expect(result).toBe('  Hello World  ')
  })

  it('should handle numbers', () => {
    const result = capitalize('hello 42 world')
    expect(result).toBe('Hello 42 World')
  })
})