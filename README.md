# Deep Freeze Utility

A lightweight TypeScript utility for deeply freezing nested objects and arrays.

## Installation

```bash
npm install deep-freeze-utility
```

## Usage

```typescript
import { deepFreeze } from 'deep-freeze-utility';

const obj = {
  name: 'Example',
  details: {
    age: 30,
    address: {
      city: 'Wonderland'
    }
  }
};

const frozenObj = deepFreeze(obj);

// Now the entire object and all its nested properties are immutable
console.log(Object.isFrozen(frozenObj)); // true
console.log(Object.isFrozen(frozenObj.details)); // true
```

## Features

- Recursively freezes nested objects and arrays
- Preserves type information
- Handles already frozen objects efficiently
- Works with complex nested structures

## API

### `deepFreeze<T>(obj: T): Readonly<T>`

Deeply freezes the given object, making it and all its nested properties immutable.

- `obj`: The object to freeze
- Returns: A frozen version of the input object

## License

MIT
