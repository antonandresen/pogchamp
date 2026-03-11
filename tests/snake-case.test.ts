import { snakeCase } from '../index'

describe('snakeCase', () => {
    it('should convert spaces to underscores', () => {
        expect(snakeCase('Hello World')).toBe('hello_world')
    })

    it('should convert camelCase to snake_case', () => {
        expect(snakeCase('fooBar')).toBe('foo_bar')
    })

    it('should convert PascalCase to snake_case', () => {
        expect(snakeCase('FooBar')).toBe('foo_bar')
    })

    it('should convert hyphens to underscores', () => {
        expect(snakeCase('foo-bar')).toBe('foo_bar')
    })

    it('should handle already snake_case strings', () => {
        expect(snakeCase('foo_bar')).toBe('foo_bar')
    })
})
