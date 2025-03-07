---
sidebar_position: 7
---

# Validation Utilities

Pogchamp provides useful validation functions.

## isEmail

Checks if a string is a valid email address.

```typescript
import { isEmail } from 'pogchamp';

isEmail('test@example.com'); // true
isEmail('test@example'); // false
isEmail('test.example.com'); // false
```

## isUrl

Checks if a string is a valid URL.

```typescript
import { isUrl } from 'pogchamp';

isUrl('https://example.com'); // true
isUrl('http://localhost:3000'); // true
isUrl('example.com'); // false
```

## isPlainObject

Checks if a value is a plain object (not array, null, or class instance).

```typescript
import { isPlainObject } from 'pogchamp';

isPlainObject({}); // true
isPlainObject([]); // false
isPlainObject(null); // false
isPlainObject(new Date()); // false
```

## hasValue

Checks if a variable has a value (not null or undefined).

```typescript
import { hasValue } from 'pogchamp';

hasValue(0); // true
hasValue(''); // true
hasValue(null); // false
hasValue(undefined); // false
``` 