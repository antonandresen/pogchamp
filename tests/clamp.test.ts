import { clamp } from '../index'

describe('clamp function',() => {

  it('Should return num param if within min and max range', () => {

    const result = clamp(50, 30, 80)
    expect(result).toEqual(50)
  })

  it('Should return max param if higher than max', () => {

    const result = clamp(90, 30, 80)
    expect(result).toEqual(80)
  })

  it('Should return min param if less than min', () => {

    const result = clamp(20, 30, 80)
    expect(result).toEqual(30)
  })
})