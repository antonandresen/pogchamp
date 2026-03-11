import { intersection } from '../index'

describe('intersection', () => {
    it('should return common elements', () => {
        expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
    })

    it('should return empty array for no common elements', () => {
        expect(intersection([1, 2], [3, 4])).toEqual([])
    })

    it('should handle empty arrays', () => {
        expect(intersection([], [1, 2])).toEqual([])
        expect(intersection([1, 2], [])).toEqual([])
    })

    it('should work with strings', () => {
        expect(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c'])
    })

    it('should preserve duplicates from a when they exist in b', () => {
        expect(intersection([1, 1, 2], [1, 2])).toEqual([1, 1, 2])
    })
})
