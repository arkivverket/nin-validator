import defaultValidationMethod, {
	validateNinOfType,
	parseNin,
	Gender,
	ALL_NIN_TYPES,
	DEFAULT_NIN_TYPES,
	NinValidationError,
} from "../src/nin-validator"

import { TestRecord, fnumbers, dnumbers, hnumbers, tenorTestNumbers } from "./testdata"

const runTests = (desc: string, data: TestRecord[]) => {
	test(`${desc} should validate`, () => {
		for (const d of data) {
			const acceptedType = d.type

			expect(validateNinOfType(d.nin, ...ALL_NIN_TYPES)).toBe(true)
			expect(validateNinOfType(d.nin, acceptedType)).toBe(true)
		}
	})

	test(`${desc} should not validate as a different type`, () => {
		for (const d of data) {
			const acceptedType = d.type
			const invalidTypes = ALL_NIN_TYPES.filter(t => t != acceptedType)
			expect(validateNinOfType(d.nin, ...invalidTypes)).toBe(false)
		}
	})

	test(`${desc} should give the correct DOB`, () => {
		for (const d of data) {
			expect(parseNin(d.nin, ...ALL_NIN_TYPES).info).toMatchObject({
				dateOfBirth: d.dob,
			})
		}
	})

	test(`${desc} should give the correct gender`, () => {
		for (const d of data) {
			expect(parseNin(d.nin, ...ALL_NIN_TYPES).info).toMatchObject({
				gender: d.gender == "F" ? Gender.Female : Gender.Male,
			})
		}
	})
}

const runShouldDefaultValidateTest = (desc: string, data: TestRecord[]) => {
	test(`${desc} should validate using the default method)`, () => {
		for (const d of data) {
			expect(defaultValidationMethod(d.nin)).toBeTruthy()
			expect(validateNinOfType(d.nin, ...DEFAULT_NIN_TYPES)).toBeTruthy()
			expect(parseNin(d.nin).info).toMatchObject({
				numberType: d.type,
			})
		}
	})
}

const runShouldNotDefaultValidateTest = (desc: string, data: TestRecord[]) => {
	test(`${desc} should not validate using the default method)`, () => {
		for (const d of data) {
			expect(defaultValidationMethod(d.nin)).toBeFalsy()
			expect(validateNinOfType(d.nin, ...DEFAULT_NIN_TYPES)).toBeFalsy()
			expect(parseNin(d.nin).error).toEqual(NinValidationError.InvalidType)
		}
	})
}

describe("Birth (F) numbers", () => {
	runTests("F numbers", fnumbers)
	runShouldDefaultValidateTest("F numbers", fnumbers)
})
describe("D numbers", () => {
	runTests("D numbers", dnumbers)
	runShouldDefaultValidateTest("D numbers", dnumbers)
})
describe("H numbers", () => {
	runTests("H numbers", hnumbers)
	runShouldNotDefaultValidateTest("H numbers", hnumbers)
})
describe("Test numbers from Tenor", () => {
	runTests("Test numbers", tenorTestNumbers)
	test("Tenor numbers should be marked correctly", () => {
		for (const n of tenorTestNumbers) {
			expect(parseNin(n.nin, ...ALL_NIN_TYPES).info).toMatchObject({
				isTestNumber: true,
			})
		}
	})
})

const modifyDigitAtPosition = (nin: string, pos: number) => {
	const digits = nin.split("")
	const oldDigit = parseInt(nin[pos])

	let newDigit: number
	do {
		newDigit = Math.floor(Math.random() * 9)
	} while (newDigit == oldDigit)

	digits[pos] = `${newDigit}`
	return digits.join("")
}

describe("Invalid checksums", () => {
	test("A random mutation in a nin gives invalid checksum", () => {
		for (const testset of [fnumbers, dnumbers, hnumbers]) {
			for (const data of testset) {
				for (let pos = 0; pos <= 10; pos++) {
					const modifiedNin = modifyDigitAtPosition(data.nin, pos)
					expect(validateNinOfType(modifiedNin, data.type)).toBeFalsy()
					expect(parseNin(modifiedNin, data.type).error).toEqual(NinValidationError.Checksum)
				}
			}
		}
	})
})
