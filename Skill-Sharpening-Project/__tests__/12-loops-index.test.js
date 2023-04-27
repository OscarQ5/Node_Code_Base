const {
  firstIndexFound,
  lastIndexFound,
  removeElementAtIndex,
  timesIndex,
} = require("../src/12-loops-index");

describe("Loops and indexes", () => {
  describe("firstIndexFound", () => {
    test("returns -1 when element not found", () => {
      expect(firstIndexFound([5, 2, 3, 5, 9], 6)).toBe(-1);
      expect(firstIndexFound([5, 2, 3, 5, 9], 0)).toBe(-1);
      expect(firstIndexFound([], 8)).toBe(-1);
    });
    test("returns index of the first element match", () => {
      expect(firstIndexFound([0, 2, 3, 5, 9], 9)).toBe(4);
      expect(firstIndexFound([5, 2, 3, 5, 9], 5)).toBe(0);
    });
  });

  describe("lastIndexFound", () => {
    test("returns -1 when element not found", () => {
      expect(lastIndexFound([5, 2, 3, 5, 9], 6)).toBe(-1);
      expect(lastIndexFound([5, 2, 3, 5, 9], 0)).toBe(-1);
      expect(lastIndexFound([], 8)).toBe(-1);
    });
    test("returns index of the last element match", () => {
      expect(lastIndexFound([0, 2, 3, 5, 9], 9)).toBe(4);
      expect(lastIndexFound([5, 2, 3, 5, 9], 5)).toBe(3);
    });
  });

  describe("removeElementAtIndex", () => {
    test("returns the same array when index does not match an element", () => {
      expect(removeElementAtIndex([5, 2, 3, 5, 9], 6)).toEqual([5, 2, 3, 5, 9]);
      expect(removeElementAtIndex(["a", "b", "c"], 99)).toEqual([
        "a",
        "b",
        "c",
      ]);
    });
    test("returns a new array with the element at index removed", () => {
      expect(removeElementAtIndex([5, 2, 3, 5, 9], 2)).toEqual([5, 2, 5, 9]);
      expect(removeElementAtIndex([5, 2, 3, 5, 9], 4)).toEqual([5, 2, 3, 5]);
      expect(removeElementAtIndex(["a", "b", "c"], 0)).toEqual(["b", "c"]);
    });
  });

  describe("timesIndex", () => {
    test("returns new array with each element multiplied by its index", () => {
      expect(timesIndex([2, 2, 2])).toEqual([0, 2, 4]);
      expect(timesIndex([1, 2, 3, 4, 5])).toEqual([0, 2, 6, 12, 20]);
      expect(timesIndex([])).toEqual([]);
    });
  });
});
