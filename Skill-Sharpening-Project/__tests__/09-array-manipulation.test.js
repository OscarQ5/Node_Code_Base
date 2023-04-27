const {
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
} = require("../src/09-array-manipulation");

describe("Array manipulation", () => {
  describe("removeElementFromEndOfArray()", () => {
    test("should remove an element from end of the array and return that element", () => {
      const array = ["A"];
      const actual = removeElementFromEndOfArray(array);
      expect(actual).toEqual("A");
    });

    test("should dynamically change depending on the input", () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).toEqual(3);
      expect(removeElementFromEndOfArray(["A"])).toEqual("A");
      expect(removeElementFromEndOfArray([true, false])).toEqual(false);
    });
  });

  describe("addElementToFrontOfArray()", () => {
    test("should add an element to the front of the array and return the array", () => {
      const array = [10];
      const actual = addElementToFrontOfArray(array, "A");
      expect(actual.shift()).toEqual("A");
    });

    test("should dynamically change depending on the input", () => {
      expect(addElementToFrontOfArray([1, 2, 3], 4).shift()).toEqual(4);
      expect(addElementToFrontOfArray(["A"], "B").shift()).toEqual("B");
      expect(addElementToFrontOfArray([], true).shift()).toEqual(true);
    });
  });

  describe("removeElementFromFrontOfArray()", () => {
    test("should remove an element from front of the array and return that element", () => {
      const array = ["A", "B", "C"];
      const actual = removeElementFromFrontOfArray(array);
      expect(actual).toEqual("A");
    });

    test("should dynamically change depending on the input", () => {
      expect(removeElementFromFrontOfArray([1, 2, 3])).toEqual(1);
      expect(removeElementFromFrontOfArray(["A"])).toEqual("A");
      expect(removeElementFromFrontOfArray([true, false])).toEqual(true);
    });
  });

  describe("getMiddleElement()", () => {
    test("should return the middle element of the array", () => {
      const actual = getMiddleElement(["first", "middle", "last"]);
      const expected = "middle";
      expect(actual).toEqual(expected);
    });

    test("should dynamically change depending on the input", () => {
      expect(getMiddleElement([10, 9, 8])).toEqual(9);
      expect(getMiddleElement(["A"])).toEqual("A");
      expect(getMiddleElement([-Infinity, 0, Infinity])).toEqual(0);
    });
  });
});
