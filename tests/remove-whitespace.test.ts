import { removeWhitespace } from '../index'

describe('removeWhitespace function', () => {
  it('should remove all spaces', () => {
    expect(removeWhitespace('hello world')).toBe('helloworld')
  })

  it('should remove multiple spaces', () => {
    expect(removeWhitespace('hello    world')).toBe('helloworld')
  })

  it('should remove tabs and newlines', () => {
    expect(removeWhitespace('hello\tworld\n')).toBe('helloworld')
  })

  it('should handle empty string', () => {
    expect(removeWhitespace('')).toBe('')
  })

  it('should handle string with only whitespace', () => {
    expect(removeWhitespace('   \t\n   ')).toBe('')
  })
}) 