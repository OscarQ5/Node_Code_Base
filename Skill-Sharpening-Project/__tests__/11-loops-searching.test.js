const {
  containsWhileLoop,
  containsForLoop,
  targetCount,
  arrayOfMatchingItems,
} = require("../src/11-loops-searching");

describe("Searching with loops", () => {
  describe("containsWhileLoop()", () => {
    test("returns true for found elements", () => {
      expect(containsWhileLoop([5, 2, 3, 5, 9], 3)).toBe(true);
      expect(containsWhileLoop(["cat", "dog", "bird"], "cat")).toBe(true);
    });
    test("returns false for not found elements", () => {
      expect(containsWhileLoop([5, 2, 3, 5, 9], 6)).toBe(false);
      expect(containsWhileLoop(["cat", "dog", "bird"], "whale")).toBe(false);
    });

    test("is written with a while loop", () => {
      const funcString = containsWhileLoop.toString();
      expect(funcString.includes("while")).toBe(true);
      expect(funcString.includes("for")).toBe(false);
    });

    test("is implemented and does not use built in includes method", () => {
      const funcString = containsWhileLoop.toString();
      expect(funcString.includes("includes")).toBe(false);
      expect(funcString !== "function containsWhileLoop() {}").toBe(true);
    });
  });

  describe("containsForLoop()", () => {
    test("returns true for found elements", () => {
      expect(containsForLoop([5, 2, 3, 5, 9], 3)).toBe(true);
      expect(containsForLoop(["cat", "dog", "bird"], "cat")).toBe(true);
    });
    test("returns false for not found elements", () => {
      expect(containsForLoop([5, 2, 3, 5, 9], 6)).toBe(false);
      expect(containsForLoop(["cat", "dog", "bird"], "whale")).toBe(false);
    });

    test("is written with a for loop", () => {
      const funcString = containsForLoop.toString();
      expect(funcString.includes("while")).toBe(false);
      expect(funcString.includes("for")).toBe(true);
    });

    test("is implemented and does not use built in includes method", () => {
      const funcString = containsForLoop.toString();
      expect(funcString.includes("includes")).toBe(false);
      expect(funcString !== "function containsForLoop() {}").toBe(true);
    });
  });

  describe("targetCount()", () => {
    test("returns the accurate count", () => {
      expect(targetCount([5, 2, 3, 5, 9], 5)).toBe(2);
      expect(targetCount([5, 2, 3, 5, 9], 6)).toBe(0);
      expect(targetCount(["cat", "cat", "cat", "bird"], "cat")).toBe(3);
      expect(targetCount(["cat", "cat", "cat", "bird"], "bird")).toBe(1);
      expect(targetCount(["cat", "cat", "cat", "bird"], "whale")).toBe(0);
    });
  });

  describe("arrayOfMatchingItems()", () => {
    test("returns the accurate count", () => {
      expect(arrayOfMatchingItems([5, 2, 3, 5, 9], 5)).toEqual([5, 5]);
      expect(arrayOfMatchingItems([5, 2, 3, 5, 9], 6)).toEqual([]);
      expect(
        arrayOfMatchingItems(["cat", "cat", "cat", "bird"], "cat")
      ).toEqual(["cat", "cat", "cat"]);
      expect(
        arrayOfMatchingItems(["cat", "cat", "cat", "bird"], "bird")
      ).toEqual(["bird"]);
      expect(
        arrayOfMatchingItems(["cat", "cat", "cat", "bird"], "whale")
      ).toEqual([]);
    });
  });
});
