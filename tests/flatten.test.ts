import { flatten } from '../index'

describe('flatten', () => {
    it('should flatten deeply nested arrays by default', () => {
        expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
    })

    it('should flatten to specified depth', () => {
        expect(flatten([1, [2, [3]]], 1)).toEqual([1, 2, [3]])
    })

    it('should handle already flat arrays', () => {
        expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should handle empty arrays', () => {
        expect(flatten([])).toEqual([])
    })

    it('should handle arrays with mixed types', () => {
        expect(flatten([1, ['a', [true]]])).toEqual([1, 'a', true])
    })
})
