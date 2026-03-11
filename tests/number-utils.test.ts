import { isEven, isOdd, formatCurrency, percentage, lerp } from '../index'

describe('isEven', () => {
    it('should return true for even numbers', () => {
        expect(isEven(2)).toBe(true)
        expect(isEven(0)).toBe(true)
        expect(isEven(-4)).toBe(true)
    })

    it('should return false for odd numbers', () => {
        expect(isEven(1)).toBe(false)
        expect(isEven(-3)).toBe(false)
    })
})

describe('isOdd', () => {
    it('should return true for odd numbers', () => {
        expect(isOdd(1)).toBe(true)
        expect(isOdd(-3)).toBe(true)
    })

    it('should return false for even numbers', () => {
        expect(isOdd(2)).toBe(false)
        expect(isOdd(0)).toBe(false)
    })
})

describe('formatCurrency', () => {
    it('should format with USD by default', () => {
        expect(formatCurrency(1234.5)).toBe('$1,234.50')
    })

    it('should format with specified currency', () => {
        // We just test it doesn't throw and contains the number
        const result = formatCurrency(1000, 'EUR', 'en-US')
        expect(result).toContain('1,000')
    })
})

describe('percentage', () => {
    it('should calculate percentage correctly', () => {
        expect(percentage(25, 200)).toBe(12.5)
        expect(percentage(50, 100)).toBe(50)
        expect(percentage(100, 100)).toBe(100)
    })

    it('should throw for zero total', () => {
        expect(() => percentage(5, 0)).toThrow()
    })
})

describe('lerp', () => {
    it('should return start value at t=0', () => {
        expect(lerp(0, 100, 0)).toBe(0)
    })

    it('should return end value at t=1', () => {
        expect(lerp(0, 100, 1)).toBe(100)
    })

    it('should return midpoint at t=0.5', () => {
        expect(lerp(0, 100, 0.5)).toBe(50)
    })

    it('should extrapolate beyond range', () => {
        expect(lerp(0, 10, 2)).toBe(20)
    })
})
