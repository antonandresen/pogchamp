---
sidebar_position: 2
---

# String Utilities

Pogchamp provides several string manipulation functions to make your development easier and more efficient.

## capitalize

Capitalizes the first letter of each word in a string.

```typescript
import { capitalize } from 'pogchamp';

capitalize('hello world'); // 'Hello World'
capitalize('hello-world'); // 'Hello-World'
capitalize('HELLO WORLD'); // 'Hello World'
```

## truncate

Truncates a string to a specified length and adds an ellipsis or custom ending.

```typescript
import { truncate } from 'pogchamp';

truncate('hello world', 5); // 'he...'
truncate('hello world', 7, '!'); // 'hello !'
truncate('hello', 10); // 'hello' (no truncation needed)
```

## removeWhitespace

Removes all whitespace characters from a string.

```typescript
import { removeWhitespace } from 'pogchamp';

removeWhitespace('hello world'); // 'helloworld'
removeWhitespace('hello  world'); // 'helloworld'
removeWhitespace('hello\tworld\n'); // 'helloworld'
```

## camelCase

Converts a string to camelCase format.

```typescript
import { camelCase } from 'pogchamp';

camelCase('hello-world'); // 'helloWorld'
camelCase('hello_world'); // 'helloWorld'
camelCase('Hello World'); // 'helloWorld'
camelCase('helloWorld'); // 'helloWorld' (already camelCase)
```