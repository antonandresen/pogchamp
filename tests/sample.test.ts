import { sample } from '../index'

describe('sample function', () => {
  it('should return an element from the array', () => {
    const arr = [1, 2, 3]
    const result = sample(arr)
    expect(arr).toContain(result)
  })

  it('should return undefined for empty array', () => {
    expect(sample([])).toBeUndefined()
  })

  it('should return the only element in single-element array', () => {
    expect(sample([1])).toBe(1)
  })

  it('should maintain type of elements', () => {
    const arr = ['a', 'b', 'c']
    const result = sample(arr)
    expect(typeof result).toBe('string')
  })

  it('should not modify original array', () => {
    const arr = [1, 2, 3]
    sample(arr)
    expect(arr).toEqual([1, 2, 3])
  })

  it('should throw error for non-array inputs', () => {
    expect(() => sample(null as any)).toThrow('Input must be an array')
    expect(() => sample(undefined as any)).toThrow('Input must be an array')
    expect(() => sample({} as any)).toThrow('Input must be an array')
  })

  it('should handle array of mixed types', () => {
    const arr = [1, 'string', true, { key: 'value' }]
    const result = sample(arr)
    expect(arr).toContain(result)
  })

  it('should provide uniform distribution', () => {
    const arr = [1, 2, 3]
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0 }
    
    for (let i = 0; i < 1000; i++) {
      const result = sample(arr) as number
      counts[result] = (counts[result] || 0) + 1
    }

    Object.values(counts).forEach(count => {
      expect(count).toBeGreaterThan(250)
      expect(count).toBeLessThan(400)
    })
  })
}) 