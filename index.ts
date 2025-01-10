/**
 * Check if variable has value. (if it's not undefined or null)
 */
export const hasValue = <T>(variable: T | undefined | null): variable is T => {
  return variable !== undefined && variable !== null
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
export const invertObject = <K extends string, V>(obj: Record<K, V>) => {
  var inverted: Record<string, K> = {}
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          inverted[obj[key] as string] = key
      }
  }

  return inverted
}

/**
 * Capitalize each word in text.
 */
export const capitalize = (text: string) => {
  return text.toLowerCase()
    .replace(/(^|\s)\w/g, c => c.toUpperCase());
}