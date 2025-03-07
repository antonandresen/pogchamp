[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`arr`, `size`): `T`[][]

Defined in: [index.ts:83](https://github.com/antonandresen/pogchamp/blob/c622d552b9277eb468753e85a6bbba7d57ac30d7/index.ts#L83)

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
