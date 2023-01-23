/**
 * Check if variable has value. (if it's not undefined or null)
 */
export const hasValue = (variable: any) => {
  return ![undefined, null].includes(variable)
}

/**
 * Clamp number between a "min", and "max" value. (both min and max are inclusive in range)
 */
export const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max)
}

/**
 * Invert JS object - Switch place between keys and values.
 */
export const invertObject = (obj: object) => {
  const invertedObj = {}
  for (const key in obj) {
    invertObject[obj[key]] = key
  }

  return invertedObj
}