---
sidebar_position: 4
---

# Object Utilities

Pogchamp provides powerful object manipulation functions to make working with objects easier.

## deepClone

Deep clones an object or array.

```typescript
import { deepClone } from 'pogchamp';

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);

// clone is a deep copy of obj
console.log(clone); // { a: 1, b: { c: 2 } }
console.log(clone === obj); // false
console.log(clone.b === obj.b); // false
```

## pick

Picks specified properties from an object.

```typescript
import { pick } from 'pogchamp';

const obj = { a: 1, b: 2, c: 3 };
pick(obj, ['a', 'b']); // { a: 1, b: 2 }
pick(obj, ['a']); // { a: 1 }
pick(obj, []); // {}
```

## omit

Omits specified properties from an object.

```typescript
import { omit } from 'pogchamp';

const obj = { a: 1, b: 2, c: 3 };
omit(obj, ['a', 'b']); // { c: 3 }
omit(obj, ['a']); // { b: 2, c: 3 }
omit(obj, []); // { a: 1, b: 2, c: 3 }
```

## invertObject

Inverts an object by switching its keys and values.

```typescript
import { invertObject } from 'pogchamp';

invertObject({ a: '1', b: '2' }); // { '1': 'a', '2': 'b' }
```

## isObject

Checks if a value is an object.

```typescript
import { isObject } from 'pogchamp';

isObject({}); // true
isObject([]); // false
isObject(null); // false
isObject(() => {}); // false
```

## deepMerge

Deep merges multiple objects together.

```typescript
import { deepMerge } from 'pogchamp';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

deepMerge(obj1, obj2);
// { a: 1, b: { c: 2, d: 3 }, e: 4 }
``` 