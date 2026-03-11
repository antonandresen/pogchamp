import { slugify } from '../index'

describe('slugify', () => {
    it('should convert spaces to hyphens', () => {
        expect(slugify('Hello World')).toBe('hello-world')
    })

    it('should remove special characters', () => {
        expect(slugify('Hello World!')).toBe('hello-world')
    })

    it('should handle multiple spaces', () => {
        expect(slugify('foo   bar')).toBe('foo-bar')
    })

    it('should trim leading/trailing hyphens', () => {
        expect(slugify('  hello  ')).toBe('hello')
    })

    it('should handle underscores', () => {
        expect(slugify('foo_bar')).toBe('foo-bar')
    })

    it('should handle already slugified strings', () => {
        expect(slugify('hello-world')).toBe('hello-world')
    })
})
