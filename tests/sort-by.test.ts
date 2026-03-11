import { sortBy } from '../index'

describe('sortBy', () => {
    const users = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
    ]

    it('should sort ascending by key (default)', () => {
        const result = sortBy(users, 'age')
        expect(result.map(u => u.age)).toEqual([25, 30, 35])
    })

    it('should sort descending by key', () => {
        const result = sortBy(users, 'age', 'desc')
        expect(result.map(u => u.age)).toEqual([35, 30, 25])
    })

    it('should sort strings alphabetically', () => {
        const result = sortBy(users, 'name')
        expect(result.map(u => u.name)).toEqual(['Alice', 'Bob', 'Charlie'])
    })

    it('should not mutate the original array', () => {
        const original = [...users]
        sortBy(users, 'age')
        expect(users).toEqual(original)
    })

    it('should handle empty arrays', () => {
        expect(sortBy([], 'age')).toEqual([])
    })
})
