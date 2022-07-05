# nin-validator: Norwegian national identity numbers

This is a validator/parser for norwegian national identity numbers, written in Typescript.

Basic usage is very simple:

```typescript
import validateNin from "nin-validator"
// The default export accepts birth numbers and D-numbers
if(!validateNin(someNin)) {
    throw "Invalid NIN"
}
```

To extract more information, use `parseNin`:
```typescript
import {parseNin} from "nin-validator"

const {info, error} = parseNin(someNin)
```