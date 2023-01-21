export const add = (a: number, b: number) => {
  return a + b
}

/**
 * Invert JS object - Switch place between keys and values
 */
export const invertObject = (obj: object) => {
  const entries = Object.entries(obj)
  const reversedEntries = entries.map(e => e.reverse())
  const invertedObj = Object.fromEntries(reversedEntries)
  return invertedObj
}