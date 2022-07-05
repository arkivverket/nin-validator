/**
 * Possible errors when parsing/validating a nin.
 */
export enum NinValidationError {
	/** The input string is not 11 digits. */
	Format = "FORMAT",
	/** The modulus check of the control digits failed */
	Checksum = "CHECKSUM",
	/** The date does not exist (leap year?),
	 * or the century code did not match the individual part of the nin. */
	Date = "DATE",
	/**
	 * the nin is valid,
	 * but the type is not one of the allowed types passed to {@link parseNin}
	 */
	InvalidType = "INVALID_TYPE",
}
/**
 * Types of nins.
 *
 */
export enum NinNumberType {
	BirthNumber = "F",
	DNumber = "D",
	HNumber = "H",
	FHNumber = "FH",
}
export const ALL_NIN_TYPES = Object.values(NinNumberType)
export const DEFAULT_NIN_TYPES = [NinNumberType.BirthNumber, NinNumberType.DNumber]

export enum Gender {
	NotKnown = 0,
	Male = 1,
	Female = 2,
	NotApplicable = 9,
}

export type NinInfo = {
	gender: Gender
	dateOfBirth: Date | undefined
	numberType: NinNumberType
	isTestNumber: boolean
}

const sumNinWithWeights = (nin: string, weights: number[]): number => {
	let sum = 0
	for (let i = 0; i < weights.length; i++) {
		sum += weights[i] * parseInt(nin[i], 10)
	}
	return sum
}

const validateChecksumWithWeightsMod11 = (nin: string, weights: number[]): boolean => {
	return sumNinWithWeights(nin, weights) % 11 == 0
}

/**
 * Parses and validates a national identification number.
 *
 * Controls the checksum, that the number is one of the types supplied as allowedTypes,
 * and that the date is valid (for number types with a date).
 *
 * @param nationalIdentificationNumber
 * @param allowedTypes List of allowed types. If not specified, defaults to {@link DEFAULT_NIN_TYPES}.
 * @returns Info about the number if applicable. An error if applicable.
 */
export const parseNin = (
	nationalIdentificationNumber: string,
	...allowedTypes: NinNumberType[]
): { info?: NinInfo; error?: NinValidationError } => {
	const ninPattern = /([0-9]{6})([0-9]{3})([0-9]{2})/
	const nin = nationalIdentificationNumber
	const actualAllowedTypes = allowedTypes.length > 0 ? allowedTypes : DEFAULT_NIN_TYPES

	// Check that the value is of the correct length
	// and that it only consists of numbers
	if (nin.length !== 11) {
		return { error: NinValidationError.Format }
	}
	const ninParts = nin.match(ninPattern)
	if (ninParts === null) {
		return { error: NinValidationError.Format }
	}

	const [, birthdateString, individualNumberString] = ninParts

	// Validate the identification number using the control numbers

	const weights1: number[] = [3, 7, 6, 1, 8, 9, 4, 5, 2, 1]
	const weights2: number[] = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1]
	if (!validateChecksumWithWeightsMod11(nin, weights1) || !validateChecksumWithWeightsMod11(nin, weights2)) {
		return { error: NinValidationError.Checksum }
	}

	// Calculate exact birthday for F/D/H-numbers
	const bdParts = birthdateString.match(/.{2}/g)
	if (bdParts === null) {
		return { error: NinValidationError.Format }
	}

	// Linter wants year to be const, but how to do that while keeping the destructuring?
	// eslint-disable-next-line
	let [day, month, year] = bdParts.map(n => parseInt(n, 10))

	let info: NinInfo

	// FH numbers start with 8/9,
	// and contain no information about gender or dob.
	if (day >= 80) {
		info = {
			numberType: NinNumberType.FHNumber,
			dateOfBirth: undefined,
			gender: Gender.NotKnown,
			isTestNumber: false,
		}
	} else {
		let numberType = NinNumberType.BirthNumber
		let isTestNumber = false

		if (day > 40) {
			numberType = NinNumberType.DNumber
			day = day - 40
		}

		// Test numbers from Tenor
		//
		if (month > 80) {
			month = month - 80
			isTestNumber = true
		}
		// Health Institution specific numbers, "H numbers"
		else if (month > 40) {
			numberType = NinNumberType.HNumber
			month = month - 40
		}

		// Check that the birth year is within a valid range
		// in relation to the individual number

		let fullYear: number
		const individualNumber = parseInt(individualNumberString, 10)
		if (individualNumber >= 500 && individualNumber <= 749 && year >= 54 && year <= 99) {
			fullYear = 1800 + year
		} else if (
			(individualNumber >= 900 && individualNumber <= 999 && year >= 40 && year <= 99) ||
			(individualNumber >= 0 && individualNumber <= 499)
		) {
			fullYear = 1900 + year
		} else if (individualNumber >= 500 && individualNumber <= 999 && year >= 0 && year <= 39) {
			fullYear = 2000 + year
		} else {
			return { error: NinValidationError.Date }
		}

		// Check that the birthdate is a valid date
		// (js months start at 0)
		const date: Date = new Date(fullYear, month - 1, day)

		if (isNaN(date.getDate())) {
			return { error: NinValidationError.Date }
		}

		// Find gender based on individual number
		const gender = parseInt(nin[8]) % 2 == 0 ? Gender.Female : Gender.Male

		info = {
			dateOfBirth: date,
			gender,
			numberType,
			isTestNumber,
		}
	}

	if (!actualAllowedTypes.includes(info.numberType)) {
		return { error: NinValidationError.InvalidType }
	}

	return { info }
}

/**
 * @param nationalIdentificationNumber The number to validate
 * @param allowed Allowed number types. Must be supplied, or validation will fail.
 * @returns Wether the nin has a valid checksum, and is one of the specified types
 */
export const validateNinOfType = (nationalIdentificationNumber: string, ...allowed: NinNumberType[]): boolean => {
	if (allowed.length == 0) {
		return false
	}
	const { info, error } = parseNin(nationalIdentificationNumber, ...allowed)
	return info != null && error === undefined
}

/**
 * Checks that the supplied number is valid, and is either a Birth Number or a D Number.
 *
 * @param nationalIdentificationNumber The number to validate
 * @returns Wether the nin has a valid checksum, and is a birth number or d number.
 */
export const validateBirthOrDNumber = (nationalIdentificationNumber: string): boolean => {
	return validateNinOfType(nationalIdentificationNumber, ...DEFAULT_NIN_TYPES)
}

export default validateBirthOrDNumber
