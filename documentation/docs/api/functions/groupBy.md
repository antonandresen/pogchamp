[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`, `K`\>(`arr`, `keyFn`): `Record`\<`K`, `T`[]\>

Defined in: [index.ts:286](https://github.com/antonandresen/pogchamp/blob/c622d552b9277eb468753e85a6bbba7d57ac30d7/index.ts#L286)

Groups array elements by a key function

## Type Parameters

• **T**

• **K** *extends* `PropertyKey`

## Parameters

### arr

`T`[]

### keyFn

(`item`) => `K`

## Returns

`Record`\<`K`, `T`[]\>

## Example

```ts
groupBy([1, 2, 3, 4], n => n % 2) // { 0: [2, 4], 1: [1, 3] }
```
