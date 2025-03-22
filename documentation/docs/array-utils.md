---
sidebar_position: 3
---

# Array Utilities

Pogchamp provides powerful array manipulation functions to simplify your code.

## chunk

Creates chunks of an array with specified size.

```typescript
import { chunk } from 'pogchamp';

chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunk([], 2); // []
```

## sample

Returns a random element from an array.

```typescript
import { sample } from 'pogchamp';

sample([1, 2, 3]); // Returns 1, 2, or 3 randomly
sample([]); // Returns undefined
```

## unique

Removes duplicate values from an array.

```typescript
import { unique } from 'pogchamp';

unique([1, 1, 2, 2, 3]); // [1, 2, 3]
unique(['a', 'b', 'a', 'c']); // ['a', 'b', 'c']
unique([]); // []
```

## uniqueBy

Returns unique elements from an array based on a property, with the option to keep either the first or last occurrence.

```typescript
import { uniqueBy } from 'pogchamp';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John Updated' }
];

// Keep first occurrence (default)
uniqueBy(users, 'id');
// [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]

// Keep last occurrence
uniqueBy(users, 'id', 'last');
// [{ id: 2, name: 'Jane' }, { id: 1, name: 'John Updated' }]
``` 