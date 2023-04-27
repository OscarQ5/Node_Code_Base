const {
  flipBoolean,
  returnBooleanValue,
  checkStrictEquality,
  isFalsy,
} = require("../src/04-booleans");

describe("Booleans", () => {
  describe("flipBoolean()", () => {
    test("should flip the boolean value and return it", () => {
      expect(flipBoolean(false)).toEqual(true);
      expect(flipBoolean(true)).toEqual(false);
    });
  });

  describe("returnBooleanValue()", () => {
    test("should return the boolean ", () => {
      expect(returnBooleanValue("abc")).toEqual(true);
      expect(returnBooleanValue("")).toEqual(false);
      expect(returnBooleanValue(null)).toEqual(false);
      expect(returnBooleanValue(1)).toEqual(true);
    });
  });

  describe("checkStrictEquality()", () => {
    test("should check for strict equality between values", () => {
      expect(checkStrictEquality(10, 10)).toEqual(true);
      expect(checkStrictEquality(10, "10")).toEqual(false);
      expect(checkStrictEquality(true, true)).toEqual(true);
      expect(checkStrictEquality(true, false)).toEqual(false);
    });
  });

  describe("isFalsy()", () => {
    test("should return true if a value is falsy", () => {
      expect(isFalsy("abc")).toEqual(false);
      expect(isFalsy("")).toEqual(true);
      expect(isFalsy(0)).toEqual(true);
    });
  });
});
