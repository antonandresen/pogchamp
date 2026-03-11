import { shuffle } from '../index'

describe('shuffle', () => {
    it('should return an array with the same elements', () => {
        const arr = [1, 2, 3, 4, 5]
        const result = shuffle(arr)
        expect(result).toHaveLength(arr.length)
        expect(result.sort()).toEqual([...arr].sort())
    })

    it('should not mutate the original array', () => {
        const arr = [1, 2, 3, 4, 5]
        const copy = [...arr]
        shuffle(arr)
        expect(arr).toEqual(copy)
    })

    it('should return a new array reference', () => {
        const arr = [1, 2, 3]
        expect(shuffle(arr)).not.toBe(arr)
    })

    it('should handle empty arrays', () => {
        expect(shuffle([])).toEqual([])
    })

    it('should handle single element arrays', () => {
        expect(shuffle([42])).toEqual([42])
    })
})
