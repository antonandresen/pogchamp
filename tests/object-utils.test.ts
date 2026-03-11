import { mapValues, filterKeys, flattenObject } from '../index'

describe('mapValues', () => {
    it('should map over object values', () => {
        expect(mapValues({ a: 1, b: 2, c: 3 }, n => n * 2)).toEqual({ a: 2, b: 4, c: 6 })
    })

    it('should pass the key to the mapping function', () => {
        const result = mapValues({ x: 1 }, (v, k) => `${k}:${v}`)
        expect(result).toEqual({ x: 'x:1' })
    })

    it('should handle empty objects', () => {
        expect(mapValues({}, v => v)).toEqual({})
    })

    it('should work with string values', () => {
        expect(mapValues({ a: 'hello', b: 'world' }, s => s.toUpperCase())).toEqual({ a: 'HELLO', b: 'WORLD' })
    })
})

describe('filterKeys', () => {
    it('should filter out keys based on predicate', () => {
        expect(filterKeys({ a: 1, b: 2, c: 3 }, k => k !== 'b')).toEqual({ a: 1, c: 3 })
    })

    it('should keep all keys if predicate always returns true', () => {
        expect(filterKeys({ a: 1, b: 2 }, () => true)).toEqual({ a: 1, b: 2 })
    })

    it('should return empty object if predicate always returns false', () => {
        expect(filterKeys({ a: 1, b: 2 }, () => false)).toEqual({})
    })

    it('should handle empty objects', () => {
        expect(filterKeys({}, () => true)).toEqual({})
    })
})

describe('flattenObject', () => {
    it('should flatten nested objects to dot-notation keys', () => {
        expect(flattenObject({ a: { b: { c: 1 } } })).toEqual({ 'a.b.c': 1 })
    })

    it('should handle mixed depth objects', () => {
        expect(flattenObject({ a: 1, b: { c: 2, d: 3 } })).toEqual({
            a: 1,
            'b.c': 2,
            'b.d': 3,
        })
    })

    it('should handle already flat objects', () => {
        expect(flattenObject({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
    })

    it('should handle empty objects', () => {
        expect(flattenObject({})).toEqual({})
    })
})
