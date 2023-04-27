const {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  cumulativeSum,
} = require("../src/10-loops-numbers");

describe("Loops and numbers", () => {
  describe("rangeSum()", () => {
    test("returns sum of all numbers between min and max inclusive", () => {
      expect(rangeSum(2, 3)).toBe(5);
      expect(rangeSum(10, 12)).toBe(33);
      expect(rangeSum(1, 5)).toBe(15);
    });
  });

  describe("rangeOdd()", () => {
    test("returns only odd numbers in decreasing order", () => {
      expect(rangeOdd(2, 3)).toEqual([3]);
      expect(rangeOdd(10, 26)).toEqual([25, 23, 21, 19, 17, 15, 13, 11]);
      expect(rangeOdd(1, 5)).toEqual([5, 3, 1]);
    });
  });

  describe("rangeEveryOther()", () => {
    test("returns every other num in range in increasing order", () => {
      expect(rangeEveryOther(2, 3)).toEqual([2]);
      expect(rangeEveryOther(10, 26)).toEqual([
        10, 12, 14, 16, 18, 20, 22, 24, 26,
      ]);
      expect(rangeEveryOther(1, 6)).toEqual([1, 3, 5]);
    });
  });

  describe("cumulativeSum()", () => {
    test("returns new array with each element is the cumulative sum", () => {
      expect(cumulativeSum([2, 2, 2])).toEqual([2, 4, 6]);
      expect(cumulativeSum([5, 2, 9])).toEqual([5, 7, 16]);
      expect(cumulativeSum([])).toEqual([]);
    });
  });
});
