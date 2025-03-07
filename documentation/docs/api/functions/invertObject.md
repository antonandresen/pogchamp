[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / invertObject

# Function: invertObject()

> **invertObject**\<`K`, `V`\>(`obj`): `Record`\<`V`, `K`\>

Defined in: [index.ts:26](https://github.com/antonandresen/pogchamp/blob/c622d552b9277eb468753e85a6bbba7d57ac30d7/index.ts#L26)

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
