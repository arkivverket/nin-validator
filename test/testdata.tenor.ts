import TestRecord from "./testdata.testrecord"
import { NinNumberType } from "../src/nin-validator"

export const tenorTestNumbers: TestRecord[] = [
	{
		nin: "17912099997",
		gender: "M",
		dob: new Date("2020-11-17"),
		type: NinNumberType.BirthNumber,
	},
	{
		nin: "29822099635",
		gender: "F",
		dob: new Date("2020-02-29"),
		type: NinNumberType.BirthNumber,
	},
	{
		nin: "05840399895",
		gender: "F",
		dob: new Date("2003-04-05"),
		type: NinNumberType.BirthNumber,
	},
	{
		nin: "12829499914",
		gender: "M",
		dob: new Date("1994-02-12"),
		type: NinNumberType.BirthNumber,
	},
	{
		nin: "12905299938",
		gender: "M",
		dob: new Date("1952-10-12"),
		type: NinNumberType.BirthNumber,
	},
	{
		nin: "21883649874",
		gender: "F",
		dob: new Date("1936-08-21"),
		type: NinNumberType.BirthNumber,
	},
	{
		nin: "21929774873",
		gender: "F",
		dob: new Date("1897-12-21"),
		type: NinNumberType.BirthNumber,
	},

	{
		nin: "57912075186",
		gender: "M",
		dob: new Date("2020-11-17"),
		type: NinNumberType.DNumber,
	},
	{
		nin: "69822075096",
		gender: "F",
		dob: new Date("2020-02-29"),
		type: NinNumberType.DNumber,
	},
	{
		nin: "45840375084",
		gender: "F",
		dob: new Date("2003-04-05"),
		type: NinNumberType.DNumber,
	},
	{
		nin: "52829400197",
		gender: "M",
		dob: new Date("1994-02-12"),
		type: NinNumberType.DNumber,
	},
	{
		nin: "52905200100",
		gender: "M",
		dob: new Date("1952-10-12"),
		type: NinNumberType.DNumber,
	},
	{
		nin: "61883600222",
		gender: "F",
		dob: new Date("1936-08-21"),
		type: NinNumberType.DNumber,
	},
	{
		nin: "61929750062",
		gender: "F",
		dob: new Date("1897-12-21"),
		type: NinNumberType.DNumber,
	},
]
