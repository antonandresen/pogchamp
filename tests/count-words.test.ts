import { countWords } from '../index'

describe('countWords', () => {
    it('should count words in a simple string', () => {
        expect(countWords('Hello world')).toBe(2)
    })

    it('should handle multiple spaces', () => {
        expect(countWords('  multiple   spaces  ')).toBe(2)
    })

    it('should return 0 for empty string', () => {
        expect(countWords('')).toBe(0)
    })

    it('should return 1 for a single word', () => {
        expect(countWords('hello')).toBe(1)
    })

    it('should handle newlines and tabs', () => {
        expect(countWords('foo\tbar\nbaz')).toBe(3)
    })
})
