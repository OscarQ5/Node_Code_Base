const {
  bothTruthy,
  atLeastOneTruthy,
  returnAorBandCorD,
  returnFirstTruthyValue,
} = require("../src/05-boolean-evaluation");

describe("Boolean evaluation", () => {
  describe("bothTruthy()", () => {
    test("should return true if both values or truthy", () => {
      expect(bothTruthy(true, true)).toEqual(true);
      expect(bothTruthy(false, true)).toEqual(false);
      expect(bothTruthy(false, false)).toEqual(false);
    });
  });

  describe("atLeastOneTruthy()", () => {
    test("should return true if any value is truthy", () => {
      expect(atLeastOneTruthy(true, true)).toEqual(true);
      expect(atLeastOneTruthy(false, true)).toEqual(true);
      expect(atLeastOneTruthy(false, false)).toEqual(false);
    });
  });

  describe("returnAorBandCorD()", () => {
    test("should return true if a or b and c or d evaluate to truthy", () => {
      expect(returnAorBandCorD(true, true, true, true)).toEqual(true);
      expect(returnAorBandCorD(true, true, false, true)).toEqual(true);
      expect(returnAorBandCorD(false, true, false, true)).toEqual(true);
      expect(returnAorBandCorD(false, false, false, true)).toEqual(false);
      expect(returnAorBandCorD(true, true, false, false)).toEqual(false);
    });
  });

  describe("returnFirstTruthyValue()", () => {
    test("should return the first truthy value", () => {
      expect(returnFirstTruthyValue(true, "abc", 100, undefined, null)).toEqual(
        true
      );
      expect(
        returnFirstTruthyValue(false, "abc", 100, undefined, null)
      ).toEqual("abc");
      expect(returnFirstTruthyValue(false, "", 100, undefined, null)).toEqual(
        100
      );
      expect(returnFirstTruthyValue(false, "", 0, undefined, null)).toEqual(
        null
      );
    });
  });
});
