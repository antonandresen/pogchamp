import { pluralize } from '../index'

describe('pluralize', () => {
    it('should return singular for count of 1', () => {
        expect(pluralize('item', 1)).toBe('item')
    })

    it('should return plural for count > 1', () => {
        expect(pluralize('item', 3)).toBe('items')
    })

    it('should return plural for count of 0', () => {
        expect(pluralize('item', 0)).toBe('items')
    })

    it('should use custom plural form', () => {
        expect(pluralize('goose', 3, 'geese')).toBe('geese')
    })

    it('should use custom plural for count > 1 but not for 1', () => {
        expect(pluralize('goose', 1, 'geese')).toBe('goose')
    })
})
