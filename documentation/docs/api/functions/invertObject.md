[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / invertObject

# Function: invertObject()

> **invertObject**\<`K`, `V`\>(`obj`): `Record`\<`V`, `K`\>

Defined in: [index.ts:26](https://github.com/antonandresen/pogchamp/blob/566c2f0caa8b1c8b5b0295aded976a7544ca5d21/index.ts#L26)

Inverts an object by switching its keys and values.

## Type Parameters

• **K** *extends* `PropertyKey`

• **V** *extends* `PropertyKey`

## Parameters

### obj

`Record`\<`K`, `V`\>

## Returns

`Record`\<`V`, `K`\>

## Throws

If values are not unique or not convertible to strings
