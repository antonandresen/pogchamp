/**
 * Check if variable has value. (if it's not undefined or null)
 */
export const hasValue = (variable: any) => {
  return ![undefined, null].includes(variable)
}

/**
 * Invert JS object - Switch place between keys and values.
 */
export const invertObject = (obj: object) => {
  const entries = Object.entries(obj)
  const reversedEntries = entries.map(e => e.reverse())
  const invertedObj = Object.fromEntries(reversedEntries)
  return invertedObj
}