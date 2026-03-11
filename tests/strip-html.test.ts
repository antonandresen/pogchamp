import { stripHtml } from '../index'

describe('stripHtml', () => {
    it('should strip basic tags', () => {
        expect(stripHtml('<p>Hello world</p>')).toBe('Hello world')
    })

    it('should strip nested tags', () => {
        expect(stripHtml('<p>Hello <b>world</b></p>')).toBe('Hello world')
    })

    it('should handle self-closing tags', () => {
        expect(stripHtml('Hello<br/>World')).toBe('Hello World')
    })

    it('should handle strings without HTML', () => {
        expect(stripHtml('Hello world')).toBe('Hello world')
    })

    it('should collapse multiple spaces', () => {
        expect(stripHtml('<p>  lots   of   space  </p>')).toBe('lots of space')
    })
})
