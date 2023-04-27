const {
  filterVowels,
  arraysWithSameSum,
  arraysWithSameDirections,
  interweave,
} = require("../src/14-challenge");

describe("Challenge", () => {
  describe("filterVowels()", () => {
    test("should return an array of only the vowels in a string", () => {
      expect(filterVowels("")).toEqual([]);
      expect(filterVowels("smrt")).toEqual([]);
      expect(filterVowels("happy")).toEqual(["a"]);
      expect(filterVowels("cheer")).toEqual(["e", "e"]);
      expect(filterVowels("win")).toEqual(["i"]);
      expect(filterVowels("hoop")).toEqual(["o", "o"]);
      expect(filterVowels("runt")).toEqual(["u"]);
      expect(
        filterVowels("the quick brown fox jumped over the lazy dog")
      ).toEqual(["e", "u", "i", "o", "o", "u", "e", "o", "e", "e", "a", "o"]);
    });
  });

  describe("arraysWithSameSum()", () => {
    test("should return `true` if both arrays have the same sum when all of their elements are added together", () => {
      expect(arraysWithSameSum([1], [1])).toEqual(true);
      expect(arraysWithSameSum([0, 1, 2], [3, 0, 0])).toEqual(true);
      expect(arraysWithSameSum([0, 1, 2], [3])).toEqual(true);
      expect(arraysWithSameSum([18], [10, 6, 2])).toEqual(true);
    });

    test("should return `false` if the arrays have different sums when all of their elements are added together", () => {
      expect(arraysWithSameSum([1], [0])).toEqual(false);
      expect(arraysWithSameSum([1, 1, 2], [3, 0, 0])).toEqual(false);
      expect(arraysWithSameSum([0, 1, 2], [4])).toEqual(false);
      expect(arraysWithSameSum([17], [10, 6, 2])).toEqual(false);
    });
  });

  describe("arraysWithSameDirections()", () => {
    test("should return `true` if both arrays have the same directions", () => {
      expect(arraysWithSameDirections(["left"], ["left"])).toEqual(true);
      expect(
        arraysWithSameDirections(["right", "left"], ["right", "left"])
      ).toEqual(true);
      expect(
        arraysWithSameDirections(
          ["right", "left", "left"],
          ["right", "left", "left"]
        )
      ).toEqual(true);
    });

    test("should return `false` if the arrays have different directions", () => {
      expect(arraysWithSameDirections(["left"], ["right"])).toEqual(false);
      expect(
        arraysWithSameDirections(["right", "left"], ["right", "left", "right"])
      ).toEqual(false);
      expect(
        arraysWithSameDirections(
          ["left", "right", "left", "left"],
          ["right", "left", "left"]
        )
      ).toEqual(false);
    });
  });

  describe("interweave()", () => {
    test("should join two arrays together, weaving their elements one after another", () => {
      expect(interweave(["a"], ["b"])).toEqual(["a", "b"]);
      expect(interweave(["a", "c"], ["b", "d"])).toEqual(["a", "b", "c", "d"]);
      expect(interweave(["a", "c"], ["b", "d", "e", "f"])).toEqual([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ]);
      expect(interweave(["a", "c", "e", "f"], ["b", "d"])).toEqual([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ]);
    });
  });
});
