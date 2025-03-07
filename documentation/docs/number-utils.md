---
sidebar_position: 5
---

# Number Utilities

Pogchamp provides useful number manipulation functions.

## random

Generates a random integer between min and max (inclusive).

```typescript
import { random } from 'pogchamp';

random(1, 10); // Random number between 1 and 10
random(5, 5); // Always returns 5
random(-10, -5); // Random number between -10 and -5
```

## round

Formats a number with specified decimal places.

```typescript
import { round } from 'pogchamp';

round(3.14159, 2); // 3.14
round(3.14159); // 3.14 (default is 2 decimals)
round(3.14159, 0); // 3
```

## isBetween

Checks if a number is between two values (inclusive).

```typescript
import { isBetween } from 'pogchamp';

isBetween(5, 1, 10); // true
isBetween(1, 1, 10); // true (equal to min)
isBetween(10, 1, 10); // true (equal to max)
isBetween(0, 1, 10); // false
```

## clamp

Clamps a number between min and max values.

```typescript
import { clamp } from 'pogchamp';

clamp(5, 1, 10); // 5 (within range)
clamp(0, 1, 10); // 1 (below min)
clamp(11, 1, 10); // 10 (above max)
``` 