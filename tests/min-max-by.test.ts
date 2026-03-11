import { minBy, maxBy } from '../index'

const items = [
    { name: 'a', value: 3 },
    { name: 'b', value: 1 },
    { name: 'c', value: 5 },
]

describe('minBy', () => {
    it('should return the element with the minimum value', () => {
        expect(minBy(items, 'value')).toEqual({ name: 'b', value: 1 })
    })

    it('should return undefined for empty array', () => {
        expect(minBy([], 'value')).toBeUndefined()
    })

    it('should return the only element for single-element array', () => {
        expect(minBy([{ x: 42 }], 'x')).toEqual({ x: 42 })
    })
})

describe('maxBy', () => {
    it('should return the element with the maximum value', () => {
        expect(maxBy(items, 'value')).toEqual({ name: 'c', value: 5 })
    })

    it('should return undefined for empty array', () => {
        expect(maxBy([], 'value')).toBeUndefined()
    })

    it('should return the only element for single-element array', () => {
        expect(maxBy([{ x: 42 }], 'x')).toEqual({ x: 42 })
    })
})
