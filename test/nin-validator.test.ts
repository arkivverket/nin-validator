import {
  validateNinOfType,
  parseNin,
  NinNumberType,
  Gender,
  ALL_NIN_TYPES,
} from "../src/nin-validator";

type TestRecord = {
  nin: string;
  gender: "M" | "F";
  dob: Date;
  type: NinNumberType;
};

const fnumbers: TestRecord[] = [
  {
    nin: "03125463265",
    gender: "F",
    dob: new Date("1854-12-03"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "18112481504",
    gender: "M",
    dob: new Date("2024-11-18"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "23047652480",
    gender: "F",
    dob: new Date("1876-04-23"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "21067403735",
    gender: "M",
    dob: new Date("1974-06-21"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "20094229627",
    gender: "F",
    dob: new Date("1942-09-20"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "08015409844",
    gender: "F",
    dob: new Date("1954-01-08"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "22061202203",
    gender: "F",
    dob: new Date("1912-06-22"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "02051433257",
    gender: "F",
    dob: new Date("1914-05-02"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "18125841763",
    gender: "M",
    dob: new Date("1958-12-18"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "03010882663",
    gender: "F",
    dob: new Date("2008-01-03"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "04115547998",
    gender: "M",
    dob: new Date("1955-11-04"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "31121493457",
    gender: "F",
    dob: new Date("2014-12-31"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "03100023058",
    gender: "F",
    dob: new Date("1900-10-03"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "31126634156",
    gender: "M",
    dob: new Date("1966-12-31"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "01036744320",
    gender: "M",
    dob: new Date("1967-03-01"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "16061465697",
    gender: "F",
    dob: new Date("2014-06-16"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "30044629530",
    gender: "M",
    dob: new Date("1946-04-30"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "10065240136",
    gender: "M",
    dob: new Date("1952-06-10"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "04065994688",
    gender: "F",
    dob: new Date("1959-06-04"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "29062489640",
    gender: "F",
    dob: new Date("2024-06-29"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "19044018759",
    gender: "M",
    dob: new Date("1940-04-19"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "16116626652",
    gender: "F",
    dob: new Date("1966-11-16"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "06101776938",
    gender: "M",
    dob: new Date("2017-10-06"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "22108742163",
    gender: "M",
    dob: new Date("1987-10-22"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "23081403058",
    gender: "F",
    dob: new Date("1914-08-23"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "10060372549",
    gender: "M",
    dob: new Date("2003-06-10"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "15086664655",
    gender: "F",
    dob: new Date("1866-08-15"),
    type: NinNumberType.BirthNumber,
  },
  {
    nin: "12101210373",
    gender: "M",
    dob: new Date("1912-10-12"),
    type: NinNumberType.BirthNumber,
  },
];

const dnumbers: TestRecord[] = [
  {
    nin: "70037337860",
    gender: "F",
    dob: new Date("1973-03-30"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "70091038925",
    gender: "M",
    dob: new Date("1910-09-30"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "48098897022",
    gender: "F",
    dob: new Date("1988-09-08"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "66061522736",
    gender: "M",
    dob: new Date("1915-06-26"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "61122783730",
    gender: "M",
    dob: new Date("2027-12-21"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "41076242036",
    gender: "F",
    dob: new Date("1962-07-01"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "70086532695",
    gender: "F",
    dob: new Date("1965-08-30"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "41013168049",
    gender: "F",
    dob: new Date("2031-01-01"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "67022395898",
    gender: "F",
    dob: new Date("2023-02-27"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "45069638434",
    gender: "F",
    dob: new Date("1996-06-05"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "62033932974",
    gender: "M",
    dob: new Date("1939-03-22"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "68074094078",
    gender: "F",
    dob: new Date("1940-07-28"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "66113243032",
    gender: "F",
    dob: new Date("1932-11-26"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "51026446868",
    gender: "F",
    dob: new Date("1964-02-11"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "66100004020",
    gender: "F",
    dob: new Date("1900-10-26"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "57086126763",
    gender: "M",
    dob: new Date("1961-08-17"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "50040056596",
    gender: "M",
    dob: new Date("2000-04-10"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "51021843834",
    gender: "F",
    dob: new Date("1918-02-11"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "57098165705",
    gender: "M",
    dob: new Date("1881-09-17"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "69010917077",
    gender: "F",
    dob: new Date("1909-01-29"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "56021206577",
    gender: "M",
    dob: new Date("1912-02-16"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "47114140909",
    gender: "M",
    dob: new Date("1941-11-07"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "61010955539",
    gender: "M",
    dob: new Date("2009-01-21"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "68038960745",
    gender: "M",
    dob: new Date("1889-03-28"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "65060081039",
    gender: "F",
    dob: new Date("2000-06-25"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "65066516525",
    gender: "M",
    dob: new Date("1965-06-25"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "65081117122",
    gender: "M",
    dob: new Date("1911-08-25"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "68124103804",
    gender: "F",
    dob: new Date("1941-12-28"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "57053697102",
    gender: "M",
    dob: new Date("2036-05-17"),
    type: NinNumberType.DNumber,
  },
  {
    nin: "55019406090",
    gender: "F",
    dob: new Date("1994-01-15"),
    type: NinNumberType.DNumber,
  },
];

const hnumbers: TestRecord[] = [
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
];

const tenorTestNumbers: TestRecord[] = [
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
];

const runTests = (desc: string, data: TestRecord[]) => {
  test(`${desc} should validate`, () => {
    for (const d of data) {
      const acceptedType = d.type;

      expect(validateNinOfType(d.nin, ...ALL_NIN_TYPES)).toBe(true);
      expect(validateNinOfType(d.nin, acceptedType)).toBe(true);
    }
  });

  test(`${desc} should not validate as a different type`, () => {
    for (const d of data) {
      const acceptedType = d.type;
      const invalidTypes = ALL_NIN_TYPES.filter((t) => t != acceptedType);
      expect(validateNinOfType(d.nin, ...invalidTypes)).toBe(false);
    }
  });

  test(`${desc} should give the correct DOB`, () => {
    for (const d of data) {
      expect(parseNin(d.nin, ...ALL_NIN_TYPES).info).toMatchObject({
        dateOfBirth: d.dob,
      });
    }
  });

  test(`${desc} should give the correct gender`, () => {
    for (const d of data) {
      expect(parseNin(d.nin, ...ALL_NIN_TYPES).info).toMatchObject({
        gender: d.gender == "F" ? Gender.Female : Gender.Male,
      });
    }
  });
};

describe("Birth (F) numbers", () => {
  runTests("F numbers", fnumbers);
});
describe("D numbers", () => {
  runTests("D numbers", dnumbers);
});
describe("H numbers", () => {
  runTests("H numbers", hnumbers);
});
describe("Test numbers from Tenor", () => {
  runTests("Test numbers", tenorTestNumbers);
  test("Tenor numbers should be marked correctly", () => {
    for (const n of tenorTestNumbers) {
      expect(parseNin(n.nin, ...ALL_NIN_TYPES).info).toMatchObject({
        isTestNumber: true,
      });
    }
  });
});

const modifyDigitAtPosition = (nin: string, pos: number) => {
  const digits = nin.split("");
  const oldDigit = parseInt(nin[pos]);

  let newDigit: number;
  do {
    newDigit = Math.floor(Math.random() * 9);
  } while (newDigit == oldDigit);

  digits[pos] = `${newDigit}`;
  return digits.join("");
};

describe("Invalid checksums", () => {
  test("A random mutation in a nin gives invalid checksum", () => {
    for (const testset of [fnumbers, dnumbers, hnumbers]) {
      for (const data of testset) {
        for (let pos = 0; pos <= 10; pos++) {
          const modifiedNin = modifyDigitAtPosition(data.nin, pos);

          expect(validateNinOfType(modifiedNin, data.type)).toBe(false);
        }
      }
    }
  });
});
