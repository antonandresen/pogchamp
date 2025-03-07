---
sidebar_position: 8
---

# Function Utilities

Pogchamp provides higher-order function utilities to enhance your code.

## debounce

Creates a debounced function that delays invoking the function until after wait milliseconds.

```typescript
import { debounce } from 'pogchamp';

// Only call the API once after the user stops typing for 300ms
const debouncedSearch = debounce((query) => {
  fetchSearchResults(query);
}, 300);

// Call this on every keystroke
inputElement.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

## memoize

Creates a function that memoizes the result of a function.

```typescript
import { memoize } from 'pogchamp';

// Expensive calculation
const calculateFactorial = (n) => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

// Memoized version
const memoizedFactorial = memoize(calculateFactorial);

memoizedFactorial(10); // Calculates and caches result
memoizedFactorial(10); // Returns cached result without recalculating
``` 