import { kebabCase } from '../index'

describe('kebabCase', () => {
    it('should convert spaces to hyphens', () => {
        expect(kebabCase('Hello World')).toBe('hello-world')
    })

    it('should convert camelCase to kebab-case', () => {
        expect(kebabCase('fooBar')).toBe('foo-bar')
    })

    it('should convert PascalCase to kebab-case', () => {
        expect(kebabCase('FooBar')).toBe('foo-bar')
    })

    it('should convert underscores to hyphens', () => {
        expect(kebabCase('foo_bar')).toBe('foo-bar')
    })

    it('should handle already kebab-case strings', () => {
        expect(kebabCase('foo-bar')).toBe('foo-bar')
    })
})
