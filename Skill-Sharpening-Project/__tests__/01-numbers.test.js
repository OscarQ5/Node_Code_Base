const {
  returnPositiveInteger,
  returnNegativeInteger,
  returnDecimalNumber,
  calculateNaN,
} = require("../src/01-numbers");

describe("Numbers", () => {
  describe("returnPositiveInteger()", () => {
    test("should return a positive integer", () => {
      const actual = returnPositiveInteger();
      expect(actual).toBeGreaterThan(0);
      expect(actual % 1).toEqual(0); // Checks for whole number.
    });
  });
  describe("returnNegativeInteger()", () => {
    test("should return a negative integer", () => {
      const actual = returnNegativeInteger();
      expect(actual).toBeLessThan(0);
      expect(actual % 1).toEqual(-0); // Checks for whole number.
    });
  });
  describe("returnDecimalNumber()", () => {
    test("should return a decimal integer", () => {
      const actual = returnDecimalNumber();
      expect(typeof actual).toEqual("number");
      expect(actual % 1).not.toEqual(0); // Checks for whole number.
    });
  });
  describe("calculateNaN()", () => {
    test("should perform an operation that returns `NaN`", () => {
      const actual = calculateNaN();
      expect(typeof actual).toEqual("number");
      expect(actual).toEqual(NaN);

      // Checks the text of the function.
      const functionText = calculateNaN.toString();
      const functionBody = functionText.split("{").slice(1).join("");
      expect(functionBody).not.toContain("NaN");
    });
  });
});
