[**pogchamp**](../README.md)

***

[pogchamp](../globals.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is Record<string, unknown>`

Defined in: [index.ts:274](https://github.com/antonandresen/pogchamp/blob/c622d552b9277eb468753e85a6bbba7d57ac30d7/index.ts#L274)

Checks if value is a plain object (not array, null, or class instance)

## Parameters

### value

`unknown`

## Returns

`value is Record<string, unknown>`

## Example

```ts
isPlainObject({}) // true
isPlainObject([]) // false
isPlainObject(null) // false
isPlainObject(new Date()) // false
```
