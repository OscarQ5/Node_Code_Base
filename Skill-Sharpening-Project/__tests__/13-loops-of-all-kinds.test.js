const {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  shoutJoinLoop,
} = require("../src/13-loops-of-all-kinds");

describe("Loops of all kinds", () => {
  describe("shoutForLoop()", () => {
    test("adds an ! to the end of each element", () => {
      expect(shoutForLoop([])).toEqual([]);
      expect(shoutForLoop(["I", "am", "a", "happy", "array"])).toEqual([
        "I!",
        "am!",
        "a!",
        "happy!",
        "array!",
      ]);
    });

    test("uses a for loop", () => {
      const funcString = shoutForLoop.toString();
      expect(funcString.includes("for")).toBe(true);
      expect(funcString.includes("while")).toBe(false);
    });
  });

  describe("shoutWhileLoop()", () => {
    test("adds an ! to the end of each element", () => {
      expect(shoutWhileLoop([])).toEqual([]);
      expect(shoutWhileLoop(["I", "am", "a", "happy", "array"])).toEqual([
        "I!",
        "am!",
        "a!",
        "happy!",
        "array!",
      ]);
    });

    test("uses a while loop", () => {
      const funcString = shoutWhileLoop.toString();
      expect(funcString.includes("for")).toBe(false);
      expect(funcString.includes("while")).toBe(true);
    });
  });

  describe("shoutForOfLoop()", () => {
    test("adds an ! to the end of each element", () => {
      expect(shoutForOfLoop([])).toEqual([]);
      expect(shoutForOfLoop(["I", "am", "a", "happy", "array"])).toEqual([
        "I!",
        "am!",
        "a!",
        "happy!",
        "array!",
      ]);
    });

    test("uses a for/of loop", () => {
      const funcString = shoutForOfLoop.toString();
      expect(funcString.includes("for")).toBe(true);
      expect(funcString.includes("of")).toBe(true);
      expect(funcString.includes("while")).toBe(false);
    });
  });

  describe("shoutJoinLoop()", () => {
    test("joins the array with spaces and adds a '!` at the very end", () => {
      expect(shoutJoinLoop([])).toEqual("!");
      expect(shoutJoinLoop(["I", "am", "a", "happy", "array"])).toEqual(
        "I am a happy array!"
      );
    });

    test("works as intended and does not use the `.join()` method", () => {
      expect(shoutJoinLoop(["Hello", "there"])).toEqual("Hello there!");
      const funcString = shoutForLoop.toString();
      expect(funcString.includes(".join")).toBe(false);
    });
  });
});
