const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create the API docs directory if it doesn't exist
const apiDocsDir = path.join(__dirname, '../docs/api');
if (!fs.existsSync(apiDocsDir)) {
  fs.mkdirSync(apiDocsDir, { recursive: true });
}

// Create a temporary tsconfig file for TypeDoc
const rootDir = path.resolve(__dirname, '../..');
const indexPath = path.join(rootDir, 'index.ts');
const tempTsConfigPath = path.join(__dirname, '../temp-typedoc-tsconfig.json');

const tsConfig = {
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [indexPath]
};

fs.writeFileSync(tempTsConfigPath, JSON.stringify(tsConfig, null, 2));

// Run TypeDoc
console.log('Generating API documentation...');
try {
  const outDir = path.join(__dirname, '../docs/api');
  
  execSync(`npx typedoc --tsconfig "${tempTsConfigPath}" --out "${outDir}" --plugin typedoc-plugin-markdown`, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
} catch (error) {
  console.error('Error running TypeDoc:', error);
} finally {
  // Clean up the temporary tsconfig file
  if (fs.existsSync(tempTsConfigPath)) {
    fs.unlinkSync(tempTsConfigPath);
  }
}

// Create an index.md file for the API section
const indexContent = `---
sidebar_position: 1
---

# API Reference

Welcome to the Pogchamp API reference documentation.

This section contains detailed API documentation for all the utility functions in the library,
automatically generated from the TypeScript source code.

The functions are organized into the following categories:

- **String Utilities**: Functions for string manipulation
- **Array Utilities**: Functions for working with arrays
- **Object Utilities**: Functions for object manipulation
- **Number Utilities**: Functions for number operations
- **Date Utilities**: Functions for date handling
- **Validation Utilities**: Functions for validation
- **Function Utilities**: Higher-order functions

Each function documentation includes:
- Description
- Parameters
- Return type
- Examples
- Source code reference
`;

fs.writeFileSync(path.join(apiDocsDir, 'index.md'), indexContent);
console.log('API documentation generated successfully!');
