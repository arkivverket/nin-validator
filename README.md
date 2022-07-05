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

To extract more information, use `parseNin`. Then, you have to specify which number types to accept. The export `ALL_NIN_TYPES` include rarely-used types like H-numbers and FH-numbers, while DEFAULT_NIN_TYPES include birth number and D number. You can also mix-and-match by using `NinNumberType` directly.

```typescript
import {parseNin, ALL_NIN_TYPES, DEFAULT_NIN_TYPES, NinNumberType} from "nin-validator"

const {info, error} = parseNin(someNin, ...ALL_NIN_TYPES)
// or
const {info, error} = parseNin(someNin, ...DEFAULT_NIN_TYPES)
// or
const {info, error} = parseNin(someNin, NinNumberType.BirthNumber, NinNumberType.HNumber)
```

The `info` key will hold `undefined` on error.
On success, it contains `gender`, `dateOfBirth`, `numberType`, and `isTestNumber`.

#### Gender
The `Gender` enum uses the ISO/IEC 5218 codes:
 - 0 = Not known;
 - 1 = Male;
 - 2 = Female;
 - 9 = Not applicable.
`parseNin` will return `Not known` for FH-numbers, and in the future for "new" national identification numbers that do not carry gender information.

### Date of birth
A JS date, midnight on the date of birth, in local time.
Contains `undefined` for FH numbers.

### Number type
One of the `NinNumberType` values. This is a Typescript enum, backed by a string.

### Test numbers
This flag is set to true if the number originates from ["Tenor"](https://www.skatteetaten.no/skjema/testdata/), the test utility of the norwegian tax authority.

Since Arkivverket has no reason to exclude test numbers from production use (they will not occur in real archives, and if they do, we want to display them), test numbers can not be rejected when validating a nin.