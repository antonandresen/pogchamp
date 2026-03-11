import { zip } from '../index'

describe('zip', () => {
    it('should zip two arrays of equal length', () => {
        expect(zip([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']])
    })

    it('should truncate to shortest array length', () => {
        expect(zip([1, 2, 3], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']])
    })

    it('should handle single arrays', () => {
        expect(zip([1, 2, 3])).toEqual([[1], [2], [3]])
    })

    it('should handle three arrays', () => {
        expect(zip([1, 2], ['a', 'b'], [true, false])).toEqual([
            [1, 'a', true],
            [2, 'b', false],
        ])
    })

    it('should return empty for empty arrays', () => {
        expect(zip([], [1, 2])).toEqual([])
    })
})
