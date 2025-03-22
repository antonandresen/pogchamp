import { uniqueBy } from '../index'

describe('uniqueBy function', () => {
  // Basic functionality
  it('should keep first occurrence by default', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John Updated' }
    ]
    expect(uniqueBy(users, 'id')).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])
  })

  it('should keep last occurrence when specified', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John Updated' }
    ]
    expect(uniqueBy(users, 'id', 'last')).toEqual([
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John Updated' }
    ])
  })

  // Edge cases
  it('should handle empty array', () => {
    expect(uniqueBy([], 'id')).toEqual([])
    expect(uniqueBy([], 'id', 'last')).toEqual([])
  })

  it('should handle array with single item', () => {
    const singleItem = [{ id: 1, name: 'John' }]
    expect(uniqueBy(singleItem, 'id')).toEqual(singleItem)
    expect(uniqueBy(singleItem, 'id', 'last')).toEqual(singleItem)
  })

  it('should handle array with all unique values', () => {
    const uniqueUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' }
    ]
    expect(uniqueBy(uniqueUsers, 'id')).toEqual(uniqueUsers)
    expect(uniqueBy(uniqueUsers, 'id', 'last')).toEqual(uniqueUsers)
  })

  it('should handle array with all duplicate values', () => {
    const duplicateUsers = [
      { id: 1, name: 'John' },
      { id: 1, name: 'John 2' },
      { id: 1, name: 'John 3' }
    ]
    expect(uniqueBy(duplicateUsers, 'id')).toEqual([{ id: 1, name: 'John' }])
    expect(uniqueBy(duplicateUsers, 'id', 'last')).toEqual([{ id: 1, name: 'John 3' }])
  })

  // Error cases
  it('should throw error for non-array input', () => {
    expect(() => uniqueBy(null as any, 'id')).toThrow('Input must be an array')
    expect(() => uniqueBy(undefined as any, 'id')).toThrow('Input must be an array')
    expect(() => uniqueBy({} as any, 'id')).toThrow('Input must be an array')
  })

  // Different property types
  it('should handle string property values', () => {
    const items = [
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' }
    ]
    expect(uniqueBy(items, 'category')).toEqual([
      { id: 1, category: 'A' },
      { id: 2, category: 'B' }
    ])
  })

  it('should handle number property values', () => {
    const items = [
      { value: 1, name: 'One' },
      { value: 2, name: 'Two' },
      { value: 1, name: 'One Again' }
    ]
    expect(uniqueBy(items, 'value')).toEqual([
      { value: 1, name: 'One' },
      { value: 2, name: 'Two' }
    ])
  })

  it('should handle boolean property values', () => {
    const items = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true }
    ]
    expect(uniqueBy(items, 'active')).toEqual([
      { id: 1, active: true },
      { id: 2, active: false }
    ])
  })

  // Order preservation
  it('should preserve relative order of remaining items', () => {
    const items = [
      { id: 1, order: 'first' },
      { id: 2, order: 'second' },
      { id: 3, order: 'third' },
      { id: 1, order: 'fourth' }
    ]
    expect(uniqueBy(items, 'id')).toEqual([
      { id: 1, order: 'first' },
      { id: 2, order: 'second' },
      { id: 3, order: 'third' }
    ])
    expect(uniqueBy(items, 'id', 'last')).toEqual([
      { id: 2, order: 'second' },
      { id: 3, order: 'third' },
      { id: 1, order: 'fourth' }
    ])
  })

  // Nested properties
  it('should handle objects with nested properties', () => {
    const items = [
      { id: { value: 1 }, name: 'First' },
      { id: { value: 2 }, name: 'Second' },
      { id: { value: 1 }, name: 'First Again' }
    ]
    expect(uniqueBy(items, 'id')).toEqual([
      { id: { value: 1 }, name: 'First' },
      { id: { value: 2 }, name: 'Second' }
    ])
  })
}) 