import { invertObject } from '../index'

describe('invertObject funciton',() => {

  it('Should correctly invert an object with strings as both keys and values', () => {
    const dinner = { food: 'hamburger', drink: 'water' }
    const expectedResult = { hamburger: 'food', water: 'drink' }

    const invertedDinner = invertObject(dinner)

    // Deep compare
    expect(JSON.stringify(invertedDinner)).toEqual(JSON.stringify(expectedResult))
  })
})