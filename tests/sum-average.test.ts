import { sum, average } from '../index'

describe('sum', () => {
    it('should return the sum of numbers', () => {
        expect(sum([1, 2, 3, 4])).toBe(10)
    })

    it('should return 0 for empty array', () => {
        expect(sum([])).toBe(0)
    })

    it('should handle negative numbers', () => {
        expect(sum([-1, -2, 3])).toBe(0)
    })

    it('should throw for non-finite values', () => {
        expect(() => sum([1, Infinity])).toThrow()
        expect(() => sum([1, NaN])).toThrow()
    })
})

describe('average', () => {
    it('should return the mean of numbers', () => {
        expect(average([1, 2, 3, 4])).toBe(2.5)
    })

    it('should throw for empty array', () => {
        expect(() => average([])).toThrow()
    })

    it('should handle single element array', () => {
        expect(average([42])).toBe(42)
    })
})
