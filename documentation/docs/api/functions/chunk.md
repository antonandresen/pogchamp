[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`arr`, `size`): `T`[][]

Defined in: [index.ts:83](https://github.com/antonandresen/pogchamp/blob/566c2f0caa8b1c8b5b0295aded976a7544ca5d21/index.ts#L83)

Creates chunks of an array with specified size

## Type Parameters

• **T**

## Parameters

### arr

`T`[]

### size

`number`

## Returns

`T`[][]

## Throws

If size is less than 1

## Example

```ts
chunk([1, 2, 3, 4], 2) // returns [[1, 2], [3, 4]]
```
