import { difference } from '../index'

describe('difference', () => {
    it('should return elements in a not in b', () => {
        expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1])
    })

    it('should return all elements when no overlap', () => {
        expect(difference([1, 2], [3, 4])).toEqual([1, 2])
    })

    it('should return empty array when all elements overlap', () => {
        expect(difference([1, 2], [1, 2])).toEqual([])
    })

    it('should handle empty arrays', () => {
        expect(difference([], [1, 2])).toEqual([])
        expect(difference([1, 2], [])).toEqual([1, 2])
    })

    it('should work with strings', () => {
        expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c'])
    })
})
