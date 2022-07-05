import TestRecord from "./testdata.testrecord"
import { NinNumberType } from "../src/nin-validator"

export const hnumbers: TestRecord[] = [
	{
		nin: "18466301236",
		gender: "F",
		dob: new Date("1963-06-18"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "30435341833",
		gender: "F",
		dob: new Date("1953-03-30"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "14445537072",
		gender: "F",
		dob: new Date("1955-04-14"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "02485907907",
		gender: "M",
		dob: new Date("1959-08-02"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "13457249262",
		gender: "F",
		dob: new Date("1972-05-13"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "29447654065",
		gender: "F",
		dob: new Date("1876-04-29"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "20465524724",
		gender: "M",
		dob: new Date("1955-06-20"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "02481159639",
		gender: "F",
		dob: new Date("2011-08-02"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "13506092064",
		gender: "F",
		dob: new Date("1960-10-13"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "23422094156",
		gender: "M",
		dob: new Date("2020-02-23"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "26449432974",
		gender: "M",
		dob: new Date("1994-04-26"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "11478293889",
		gender: "F",
		dob: new Date("1982-07-11"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "13462734780",
		gender: "M",
		dob: new Date("1927-06-13"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "11493797168",
		gender: "M",
		dob: new Date("2037-09-11"),
		type: NinNumberType.HNumber,
	},
	{
		nin: "03450951330",
		gender: "M",
		dob: new Date("2009-05-03"),
		type: NinNumberType.HNumber,
	},
]
