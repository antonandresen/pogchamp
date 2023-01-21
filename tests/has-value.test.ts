import { hasValue } from '../index'

describe('hasValue function',() => {

  it('Should return false if passed undefined', () => {

    const result = hasValue(undefined)
    expect(result).toEqual(false)
  })

  it('Should return false if passed null', () => {

    const result = hasValue(null)
    expect(result).toEqual(false)
  })

  it('Should return true if passed empty string', () => {

    const result = hasValue('')
    expect(result).toEqual(true)
  })

  it('Should return true if passed 0', () => {

    const result = hasValue(0)
    expect(result).toEqual(true)
  })

  it('Should return true if passed empty object', () => {

    const result = hasValue({})
    expect(result).toEqual(true)
  })

  it('Should return true if passed empty array', () => {

    const result = hasValue([])
    expect(result).toEqual(true)
  })
})