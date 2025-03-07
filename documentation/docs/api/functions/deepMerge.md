[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / deepMerge

# Function: deepMerge()

> **deepMerge**(`target`, ...`sources`): `Record`\<`string`, `any`\>

Defined in: [index.ts:356](https://github.com/antonandresen/pogchamp/blob/566c2f0caa8b1c8b5b0295aded976a7544ca5d21/index.ts#L356)

Deep merges multiple objects together

## Parameters

### target

`Record`\<`string`, `any`\>

The base object to merge into (not modified)

### sources

...`Record`\<`string`, `any`\>[]

One or more objects to merge

## Returns

`Record`\<`string`, `any`\>

A new object with all properties merged

## Example

```ts
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const result = deepMerge(obj1, obj2);
// result = { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

## Description

- Creates a new object (doesn't modify the original objects)
- Merges nested objects recursively
- Later sources override earlier ones for primitive values
- For objects, their properties are merged instead of replacing
