---
sidebar_position: 6
---

# Date Utilities

Pogchamp provides helpful date manipulation functions.

## formatDate

Formats a date to YYYY-MM-DD.

```typescript
import { formatDate } from 'pogchamp';

formatDate(new Date('2023-01-15')); // '2023-01-15'
formatDate(new Date('2023-05-05')); // '2023-05-05'
```

## addDays

Adds days to a date.

```typescript
import { addDays } from 'pogchamp';

const date = new Date('2023-01-15');
addDays(date, 5); // 2023-01-20
addDays(date, -5); // 2023-01-10
```

## isToday

Checks if a date is today.

```typescript
import { isToday } from 'pogchamp';

isToday(new Date()); // true
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
isToday(yesterday); // false
``` 