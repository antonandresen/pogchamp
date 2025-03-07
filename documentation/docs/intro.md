---
sidebar_position: 1
---

# Getting Started

Pogchamp is a lightweight TypeScript utility library with zero dependencies.

## Installation

```bash
npm install pogchamp
```

## Usage

```typescript
import { truncate, camelCase, isEmail } from 'pogchamp';

// String utilities
truncate('hello world', 5); // 'he...'
camelCase('hello-world'); // 'helloWorld'

// Validation
isEmail('test@example.com'); // true
```

## Features

- 🎯 Fully typed - written in TypeScript with complete type definitions
- ✅ 100% test coverage
- 🪶 Zero dependencies
- 🔍 Tree-shakeable
- �� Small bundle size
