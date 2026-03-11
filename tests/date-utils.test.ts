import { diffInDays, startOfDay, endOfDay, isWeekend, formatRelative } from '../index'

describe('diffInDays', () => {
    it('should return the number of days between two dates', () => {
        expect(diffInDays(new Date('2024-01-01'), new Date('2024-01-10'))).toBe(9)
    })

    it('should be commutative (absolute difference)', () => {
        const a = new Date('2024-01-01')
        const b = new Date('2024-01-10')
        expect(diffInDays(a, b)).toBe(diffInDays(b, a))
    })

    it('should return 0 for same date', () => {
        const d = new Date('2024-06-15')
        expect(diffInDays(d, d)).toBe(0)
    })
})

describe('startOfDay', () => {
    it('should set time to 00:00:00.000', () => {
        const d = new Date('2024-06-15T15:30:45.123')
        const result = startOfDay(d)
        expect(result.getHours()).toBe(0)
        expect(result.getMinutes()).toBe(0)
        expect(result.getSeconds()).toBe(0)
        expect(result.getMilliseconds()).toBe(0)
    })

    it('should not mutate the original date', () => {
        const d = new Date('2024-06-15T15:30:00')
        startOfDay(d)
        expect(d.getHours()).toBe(15)
    })
})

describe('endOfDay', () => {
    it('should set time to 23:59:59.999', () => {
        const d = new Date('2024-06-15T08:00:00')
        const result = endOfDay(d)
        expect(result.getHours()).toBe(23)
        expect(result.getMinutes()).toBe(59)
        expect(result.getSeconds()).toBe(59)
        expect(result.getMilliseconds()).toBe(999)
    })

    it('should not mutate the original date', () => {
        const d = new Date('2024-06-15T08:00:00')
        endOfDay(d)
        expect(d.getHours()).toBe(8)
    })
})

describe('isWeekend', () => {
    it('should return true for Saturday', () => {
        expect(isWeekend(new Date('2024-06-15'))).toBe(true) // Saturday
    })

    it('should return true for Sunday', () => {
        expect(isWeekend(new Date('2024-06-16'))).toBe(true) // Sunday
    })

    it('should return false for weekday', () => {
        expect(isWeekend(new Date('2024-06-17'))).toBe(false) // Monday
        expect(isWeekend(new Date('2024-06-14'))).toBe(false) // Friday
    })
})

describe('formatRelative', () => {
    it('should return "just now" for very recent dates', () => {
        expect(formatRelative(new Date(Date.now() - 5000))).toBe('just now')
    })

    it('should return minutes for recent dates', () => {
        const result = formatRelative(new Date(Date.now() - 5 * 60 * 1000))
        expect(result).toBe('5 minutes ago')
    })

    it('should handle singular forms', () => {
        expect(formatRelative(new Date(Date.now() - 60 * 1000))).toBe('1 minute ago')
        expect(formatRelative(new Date(Date.now() - 3600 * 1000))).toBe('1 hour ago')
    })

    it('should return hours for older dates', () => {
        const result = formatRelative(new Date(Date.now() - 3 * 3600 * 1000))
        expect(result).toBe('3 hours ago')
    })
})
