/**
 * Check if variable has value. (if it's not undefined or null)
 */
export const hasValue = <T>(variable: T | undefined | null): variable is T => {
  return variable !== undefined && variable !== null
}

/**
 * Clamp number between min and max values (inclusive)
 * @throws {Error} If min is greater than max
 */
export const clamp = (num: number, min: number, max: number): number => {
  if (!Number.isFinite(num) || !Number.isFinite(min) || !Number.isFinite(max)) {
    throw new Error('All parameters must be finite numbers');
  }
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value');
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Inverts an object by switching its keys and values.
 * @throws {Error} If values are not unique or not convertible to strings
 */
export const invertObject = <K extends PropertyKey, V extends PropertyKey>(
  obj: Record<K, V>
): Record<V, K> => {
  const entries = Object.entries(obj) as [K, V][];
  const values = new Set(entries.map(([_, v]) => v));
  
  if (values.size !== entries.length) {
    throw new Error('Object values must be unique to create an inverse mapping');
  }

  return entries.reduce((acc, [k, v]) => {
    acc[v] = k;
    return acc;
  }, {} as Record<V, K>);
}

/**
 * Capitalize each word in text.
 */
export const capitalize = (text: string) => {
  return text.toLowerCase()
    .replace(/(^|\s)\w/g, c => c.toUpperCase());
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 */
export const truncate = (str: string, length: number, ending: string = '...') => {
  if (str.length <= length) return str;
  return str.substring(0, Math.max(length - ending.length, 0)) + ending;
}

/**
 * Removes all whitespace from a string
 */
export const removeWhitespace = (str: string) => {
  return str.replace(/\s+/g, '');
}

/**
 * Converts a string to camelCase
 */
export const camelCase = (str: string) => {
  // First preserve existing camelCase
  const preservedStr = str.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`)
  
  // Then apply standard camelCase transformation
  return preservedStr.toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/**
 * Creates chunks of an array with specified size
 * @throws {Error} If size is less than 1
 * @example
 * chunk([1, 2, 3, 4], 2) // returns [[1, 2], [3, 4]]
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size < 1) {
    throw new Error('Chunk size must be greater than 0');
  }
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

/**
 * Returns a random element from an array
 * @throws {Error} If array is null or undefined
 */
export const sample = <T>(arr: T[]): T | undefined => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Removes duplicate values from an array
 */
export const unique = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
}

/**
 * Deep clones an object or array
 * @throws {Error} If object contains circular references
 * @throws {Error} If object contains functions or symbols
 */
export const deepClone = <T>(obj: T): T => {
  try {
    return JSON.parse(JSON.stringify(obj, (_, value) => {
      if (typeof value === 'function') {
        throw new Error('Cannot clone functions');
      }
      if (typeof value === 'symbol') {
        throw new Error('Cannot clone symbols');
      }
      return value;
    }));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to deep clone: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Picks specified properties from an object
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
}

/**
 * Omits specified properties from an object
 */
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}

/**
 * Generates a random integer between min and max (inclusive)
 * @throws {Error} If min is greater than max
 * @throws {Error} If parameters are not finite numbers
 */
export const random = (min: number, max: number): number => {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new Error('Parameters must be finite numbers');
  }
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a number with specified decimal places
 * @throws {Error} If decimals is negative
 */
export const round = (num: number, decimals: number = 2): number => {
  if (decimals < 0) {
    throw new Error('Decimal places cannot be negative');
  }
  if (!Number.isFinite(num)) {
    throw new Error('Input must be a finite number');
  }
  return Number(Math.round(Number(num + 'e' + decimals)) + 'e-' + decimals);
}

/**
 * Checks if a number is between two values (inclusive)
 */
export const isBetween = (num: number, min: number, max: number): boolean => {
  return num >= min && num <= max;
}

/**
 * Formats a date to YYYY-MM-DD
 * @throws {Error} If date is invalid
 */
export const formatDate = (date: Date): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  return date.toISOString().split('T')[0]!;
}

/**
 * Adds days to a date
 */
export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Checks if a date is today
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

/**
 * Checks if string is a valid email address
 * More strict validation than simple regex
 */
export const isEmail = (email: string): boolean => {
  if (email.length > 254) return false;
  
  // Must have exactly one @ symbol
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  
  const [local, domain] = parts;
  
  // Local part checks
  if (!local || local.length > 64 || local.includes('..')) return false;
  
  // First and last character of local part must be alphanumeric
  if (!/^[a-zA-Z0-9].*[a-zA-Z0-9]$/.test(local)) return false;
  
  // Domain part checks
  if (!domain || domain.length > 255 || !domain.includes('.')) return false;
  
  // Final regex check for valid characters
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Checks if string is a valid URL
 * Supports http, https, ftp, and ws protocols
 */
export const isUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const parsed = new URL(url);
    return ['http:', 'https:', 'ftp:', 'ws:', 'wss:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Checks if value is a plain object (not array, null, or class instance)
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 * isPlainObject(null) // false
 * isPlainObject(new Date()) // false
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== 'object' || value === null) return false;
  
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

/**
 * Groups array elements by a key function
 * @example
 * groupBy([1, 2, 3, 4], n => n % 2) // { 0: [2, 4], 1: [1, 3] }
 */
export const groupBy = <T, K extends PropertyKey>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]> => {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = acc[key] || [];
    acc[key]!.push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

/**
 * Creates a function that memoizes the result of func
 */
export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  keyFn?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>) => {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * Deep merges multiple objects together
 * 
 * @param target - The base object to merge into (not modified)
 * @param sources - One or more objects to merge
 * @returns A new object with all properties merged
 * 
 * @example
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 }, e: 4 };
 * const result = deepMerge(obj1, obj2);
 * // result = { a: 1, b: { c: 2, d: 3 }, e: 4 }
 * 
 * @description
 * - Creates a new object (doesn't modify the original objects)
 * - Merges nested objects recursively
 * - Later sources override earlier ones for primitive values
 * - For objects, their properties are merged instead of replacing
 */
export const deepMerge = (
  target: Record<string, any>,
  ...sources: Record<string, any>[]
): Record<string, any> => {
  const output = Object.assign({}, target);
  
  if (sources.length === 0) return output;

  sources.forEach(source => {
    if (isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in output)) {
            output[key] = {};
          } else if (!isObject(output[key])) {
            output[key] = {};
          }
          output[key] = deepMerge(output[key], source[key]);
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  
  return output;
}

/**
 * Checks if a value is an object
 * @param {unknown} item - The value to check
 * @returns {boolean} True if the value is an object, false otherwise
 */
export const isObject = (item: unknown): item is Record<string, any> => {
  return Boolean(item && typeof item === 'object' && !Array.isArray(item));
}