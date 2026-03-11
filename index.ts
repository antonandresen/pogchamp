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

/**
 * Returns unique elements from an array based on a property, keeping either first or last occurrence
 * @param arr - The array to process
 * @param prop - The property to check for uniqueness
 * @param keepMode - Whether to keep the first or last occurrence ('first' | 'last', defaults to 'first')
 * @example
 * const users = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 1, name: 'John Updated' }
 * ];
 * uniqueBy(users, 'id'); // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 * uniqueBy(users, 'id', 'last'); // [{ id: 2, name: 'Jane' }, { id: 1, name: 'John Updated' }]
 */
export const uniqueBy = <T extends Record<PropertyKey, any>>(
  arr: T[],
  prop: keyof T,
  keepMode: 'first' | 'last' = 'first'
): T[] => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  const seen = new Set<string>();
  const workingArray = keepMode === 'last' ? [...arr].reverse() : arr;

  const result = workingArray.filter(item => {
    const value = item[prop];
    const key = typeof value === 'object' && value !== null
      ? JSON.stringify(value)
      : String(value);

    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });

  return keepMode === 'last' ? result.reverse() : result;
}

// ─── String Utilities ────────────────────────────────────────────────────────

/**
 * Converts a string to a URL-friendly slug.
 * @example
 * slugify("Hello World!") // "hello-world"
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Converts a string to snake_case.
 * @example
 * snakeCase("Hello World") // "hello_world"
 * snakeCase("fooBar") // "foo_bar"
 */
export const snakeCase = (str: string): string => {
  return str
    .replace(/[\s-]+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/^_/, '')
    .toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * @example
 * kebabCase("Hello World") // "hello-world"
 * kebabCase("fooBar") // "foo-bar"
 */
export const kebabCase = (str: string): string => {
  return str
    .replace(/[\s_]+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/^-/, '')
    .toLowerCase();
}

/**
 * Counts the number of words in a string.
 * @example
 * countWords("Hello world") // 2
 * countWords("  multiple   spaces  ") // 2
 */
export const countWords = (str: string): number => {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Strips HTML tags from a string.
 * @example
 * stripHtml("<p>Hello <b>world</b></p>") // "Hello world"
 */
export const stripHtml = (str: string): string => {
  return str.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Returns the singular or plural form of a word based on count.
 * @example
 * pluralize("item", 1) // "item"
 * pluralize("item", 3) // "items"
 * pluralize("item", 3, "pieces") // "pieces"
 */
export const pluralize = (word: string, count: number, plural?: string): string => {
  if (count === 1) return word;
  return plural ?? `${word}s`;
}

// ─── Array Utilities ─────────────────────────────────────────────────────────

/**
 * Flattens a nested array to a specified depth.
 * @example
 * flatten([1, [2, [3, [4]]]]) // [1, 2, 3, 4]
 * flatten([1, [2, [3]]], 1) // [1, 2, [3]]
 */
export const flatten = <T>(arr: any[], depth: number = Infinity): T[] => {
  return arr.flat(depth) as T[];
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Returns a new array; does not mutate the original.
 */
export const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

/**
 * Returns elements present in both arrays (set intersection).
 * @example
 * intersection([1, 2, 3], [2, 3, 4]) // [2, 3]
 */
export const intersection = <T>(a: T[], b: T[]): T[] => {
  const setB = new Set(b);
  return a.filter(x => setB.has(x));
}

/**
 * Returns elements in array `a` that are not present in array `b` (set difference).
 * @example
 * difference([1, 2, 3], [2, 3, 4]) // [1]
 */
export const difference = <T>(a: T[], b: T[]): T[] => {
  const setB = new Set(b);
  return a.filter(x => !setB.has(x));
}

/**
 * Zips multiple arrays together into an array of tuples.
 * Length is determined by the shortest array.
 * @example
 * zip([1, 2], ['a', 'b']) // [[1, 'a'], [2, 'b']]
 */
export const zip = <T extends any[][]>(...arrays: T): { [K in keyof T]: T[K][number] }[] => {
  const length = Math.min(...arrays.map(a => a.length));
  return Array.from({ length }, (_, i) => arrays.map(a => a[i])) as any;
}

/**
 * Sorts an array of objects by a key.
 * @param arr - The array to sort
 * @param key - The key to sort by
 * @param order - 'asc' (default) or 'desc'
 */
export const sortBy = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Returns the element with the minimum value for a given key.
 * Returns undefined for empty arrays.
 */
export const minBy = <T extends Record<string, any>>(arr: T[], key: keyof T): T | undefined => {
  if (arr.length === 0) return undefined;
  return arr.reduce((min, item) => item[key] < min[key] ? item : min);
}

/**
 * Returns the element with the maximum value for a given key.
 * Returns undefined for empty arrays.
 */
export const maxBy = <T extends Record<string, any>>(arr: T[], key: keyof T): T | undefined => {
  if (arr.length === 0) return undefined;
  return arr.reduce((max, item) => item[key] > max[key] ? item : max);
}

/**
 * Returns the sum of all numbers in an array.
 * @throws {Error} If array is empty or contains non-finite values
 */
export const sum = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  if (arr.some(n => !Number.isFinite(n))) {
    throw new Error('All elements must be finite numbers');
  }
  return arr.reduce((acc, n) => acc + n, 0);
}

/**
 * Returns the average (mean) of all numbers in an array.
 * @throws {Error} If array is empty
 */
export const average = (arr: number[]): number => {
  if (arr.length === 0) throw new Error('Cannot compute average of an empty array');
  return sum(arr) / arr.length;
}

// ─── Date Utilities ───────────────────────────────────────────────────────────

/**
 * Returns the number of whole days between two dates.
 * @example
 * diffInDays(new Date('2024-01-01'), new Date('2024-01-10')) // 9
 */
export const diffInDays = (a: Date, b: Date): number => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  return Math.floor(Math.abs(b.getTime() - a.getTime()) / MS_PER_DAY);
}

/**
 * Returns a new date set to the start of the day (00:00:00.000).
 */
export const startOfDay = (date: Date): Date => {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Returns a new date set to the end of the day (23:59:59.999).
 */
export const endOfDay = (date: Date): Date => {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Returns true if the given date falls on a Saturday or Sunday.
 */
export const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Returns a human-readable relative time string.
 * @example
 * formatRelative(new Date(Date.now() - 5000)) // "just now"
 * formatRelative(new Date(Date.now() - 3600000)) // "1 hour ago"
 */
export const formatRelative = (date: Date): string => {
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffSec < 30) return 'just now';
  if (diffSec < 60) return `${diffSec} seconds ago`;
  if (diffMin < 60) return `${diffMin} ${diffMin === 1 ? 'minute' : 'minutes'} ago`;
  if (diffHour < 24) return `${diffHour} ${diffHour === 1 ? 'hour' : 'hours'} ago`;
  if (diffDay < 7) return `${diffDay} ${diffDay === 1 ? 'day' : 'days'} ago`;
  if (diffWeek < 5) return `${diffWeek} ${diffWeek === 1 ? 'week' : 'weeks'} ago`;
  if (diffMonth < 12) return `${diffMonth} ${diffMonth === 1 ? 'month' : 'months'} ago`;
  return `${diffYear} ${diffYear === 1 ? 'year' : 'years'} ago`;
}

// ─── Number Utilities ─────────────────────────────────────────────────────────

/**
 * Returns true if the number is even.
 */
export const isEven = (n: number): boolean => n % 2 === 0;

/**
 * Returns true if the number is odd.
 */
export const isOdd = (n: number): boolean => n % 2 !== 0;

/**
 * Formats a number as a currency string.
 * @param n - The number to format
 * @param currency - ISO 4217 currency code (default: 'USD')
 * @param locale - BCP 47 locale string (default: 'en-US')
 * @example
 * formatCurrency(1234.5) // "$1,234.50"
 * formatCurrency(1234.5, 'EUR', 'de-DE') // "1.234,50 €"
 */
export const formatCurrency = (n: number, currency: string = 'USD', locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(n);
}

/**
 * Calculates what percentage `value` is of `total`.
 * @throws {Error} If total is 0
 * @example
 * percentage(25, 200) // 12.5
 */
export const percentage = (value: number, total: number): number => {
  if (total === 0) throw new Error('Total cannot be zero');
  return (value / total) * 100;
}

/**
 * Linearly interpolates between two values.
 * @param a - Start value
 * @param b - End value
 * @param t - Interpolation factor (0–1)
 * @example
 * lerp(0, 100, 0.5) // 50
 */
export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
}

// ─── Object Utilities ─────────────────────────────────────────────────────────

/**
 * Maps over the values of an object, returning a new object with the same keys.
 * @example
 * mapValues({ a: 1, b: 2 }, n => n * 2) // { a: 2, b: 4 }
 */
export const mapValues = <T extends Record<string, any>, R>(
  obj: T,
  fn: (value: T[keyof T], key: string) => R
): Record<string, R> => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, fn(v, k)])
  );
}

/**
 * Filters object entries by a predicate on their keys.
 * @example
 * filterKeys({ a: 1, b: 2, c: 3 }, key => key !== 'b') // { a: 1, c: 3 }
 */
export const filterKeys = <T extends Record<string, any>>(
  obj: T,
  predicate: (key: string) => boolean
): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => predicate(k))
  ) as Partial<T>;
}

/**
 * Flattens a nested object to dot-notation keys.
 * @example
 * flattenObject({ a: { b: { c: 1 } } }) // { 'a.b.c': 1 }
 */
export const flattenObject = (
  obj: Record<string, any>,
  prefix: string = ''
): Record<string, any> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (isObject(value)) {
      Object.assign(acc, flattenObject(value, fullKey));
    } else {
      acc[fullKey] = value;
    }
    return acc;
  }, {} as Record<string, any>);
}

// ─── Async / Function Utilities ───────────────────────────────────────────────

/**
 * Returns a promise that resolves after a given number of milliseconds.
 * @example
 * await sleep(1000) // waits 1 second
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a throttled function that invokes func at most once per `wait` milliseconds.
 * Unlike debounce, the first call executes immediately.
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let lastTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = wait - (now - lastTime);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      lastTime = now;
      func(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastTime = Date.now();
        timeoutId = undefined;
        func(...args);
      }, remaining);
    }
  };
}

/**
 * Retries an async function up to `attempts` times on failure.
 * @param fn - The async function to retry
 * @param attempts - Maximum number of attempts (default: 3)
 * @param delayMs - Delay between retries in ms (default: 0)
 * @throws The last error if all attempts fail
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delayMs: number = 0
): Promise<T> => {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < attempts - 1 && delayMs > 0) {
        await sleep(delayMs);
      }
    }
  }
  throw lastError;
}

/**
 * Wraps a promise with a timeout. Rejects if the promise doesn't resolve within `ms`.
 * @throws {Error} If the timeout is exceeded
 * @example
 * await timeout(fetch('https://example.com'), 5000)
 */
export const timeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  const timer = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
  );
  return Promise.race([promise, timer]);
}