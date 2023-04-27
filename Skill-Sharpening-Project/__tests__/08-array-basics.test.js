const {
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
} = require("../src/08-array-basics");

describe("Array basics", () => {
  describe("createArrayWithTwoElements()", () => {
    test("should return an array with the two given levels", () => {
      const actual = createArrayWithTwoElements("A", "B");
      const expected = ["A", "B"];
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the input", () => {
      expect(createArrayWithTwoElements(1, 2)).toEqual([1, 2]);
      expect(createArrayWithTwoElements(true, false)).toEqual([true, false]);
      expect(createArrayWithTwoElements(null, undefined)).toEqual([
        null,
        undefined,
      ]);
    });
  });

  describe("getArrayLength()", () => {
    test("should return the length of an array", () => {
      const actual = getArrayLength([1, 2, 3]);
      const expected = 3;
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the input", () => {
      expect(getArrayLength([])).toEqual(0);
      expect(getArrayLength(["element"])).toEqual(1);
      expect(getArrayLength([[], []])).toEqual(2);
    });
  });

  describe("getFirstElementOfArray()", () => {
    test("should return the first element of the array", () => {
      const actual = getFirstElementOfArray(["first", "last"]);
      const expected = "first";
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the input", () => {
      expect(getFirstElementOfArray([10, 9, 8])).toEqual(10);
      expect(getFirstElementOfArray(["A"])).toEqual("A");
      expect(getFirstElementOfArray([undefined, null])).toEqual(undefined);
    });
  });

  describe("getLastElementOfArray()", () => {
    test("should return the last element of the array", () => {
      const actual = getLastElementOfArray(["first", "last"]);
      const expected = "last";
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the input", () => {
      expect(getLastElementOfArray([10, 9, 8])).toEqual(8);
      expect(getLastElementOfArray(["A"])).toEqual("A");
      expect(getLastElementOfArray([undefined, null])).toEqual(null);
    });
  });
});
