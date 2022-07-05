import { NinNumberType } from "../src/nin-validator"
export type TestRecord = {
	nin: string
	gender: "M" | "F"
	dob: Date
	type: NinNumberType
}
export default TestRecord
