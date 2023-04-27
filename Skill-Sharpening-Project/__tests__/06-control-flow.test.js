const {
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
} = require("../src/06-control-flow");

describe("Control flow", () => {
  describe("findLarger()", () => {
    test("returns the larger of two numbers", () => {
      expect(findLarger(-1, 5)).toEqual(5);
      expect(findLarger(8, 2)).toEqual(8);
      expect(findLarger(1, 0)).toEqual(1);
      expect(findLarger(-2, -1)).toEqual(-1);
    });
  });

  describe("findLargerOrTie()", () => {
    test("returns the larger of two numbers", () => {
      expect(findLargerOrTie(-1, 5)).toEqual(5);
      expect(findLargerOrTie(8, 2)).toEqual(8);
      expect(findLargerOrTie(1, 0)).toEqual(1);
      expect(findLargerOrTie(-2, -1)).toEqual(-1);
    });
    test("returns 'tie' when two numbers are the same", () => {
      expect(findLargerOrTie(-1, -1)).toEqual("tie");
      expect(findLargerOrTie(8, 8)).toEqual("tie");
      expect(findLargerOrTie(0, 0)).toEqual("tie");
    });
  });

  describe("positiveNegativeOrZero()", () => {
    test("returns Positive when number is positive", () => {
      expect(positiveNegativeOrZero(1)).toEqual("Positive");
      expect(positiveNegativeOrZero(2)).toEqual("Positive");
    });
    test("returns Negative when number is negative", () => {
      expect(positiveNegativeOrZero(-1)).toEqual("Negative");
      expect(positiveNegativeOrZero(-2)).toEqual("Negative");
    });
    test("returns Zero when number is 0", () => {
      expect(positiveNegativeOrZero(0)).toEqual("Zero");
    });
  });

  describe("aroundTheWorldGreeting()", () => {
    test("returns greetings in english, spanish, and german", () => {
      expect(aroundTheWorldGreeting("english")).toEqual("Hello World");
      expect(aroundTheWorldGreeting("spanish")).toEqual("Hola Mundo");
      expect(aroundTheWorldGreeting("german")).toEqual("Hallo Welt");
    });
    test("returns english when no argument is provided", () => {
      expect(aroundTheWorldGreeting()).toEqual("Hello World");
    });
  });
});
