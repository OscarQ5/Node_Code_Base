const {
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
} = require("../src/07-control-flow-cont");

describe("Control flow (cont.)", () => {
  describe("aroundTheWorldGreetingWithSwitch()", () => {
    test("returns greetings in english, spanish, and german", () => {
      expect(aroundTheWorldGreetingWithSwitch("english")).toEqual(
        "Hello World"
      );
      expect(aroundTheWorldGreetingWithSwitch("spanish")).toEqual("Hola Mundo");
      expect(aroundTheWorldGreetingWithSwitch("german")).toEqual("Hallo Welt");
    });
    test("returns english when no argument is provided", () => {
      expect(aroundTheWorldGreetingWithSwitch()).toEqual("Hello World");
    });
    test("uses a switch statement", () => {
      expect(
        aroundTheWorldGreetingWithSwitch.toString().includes("switch")
      ).toEqual(true);
    });
  });

  describe("calculateLetterGrade()", () => {
    test("returns the correct grade", () => {
      expect(calculateLetterGrade(90)).toEqual("A");
      expect(calculateLetterGrade(80)).toEqual("B");
      expect(calculateLetterGrade(70)).toEqual("C");
      expect(calculateLetterGrade(60)).toEqual("D");
      expect(calculateLetterGrade(50)).toEqual("F");
      expect(calculateLetterGrade(5)).toEqual("F");
    });
  });

  describe("animalCounts()", () => {
    test("works for singular animals", () => {
      expect(animalCounts("cat", 1)).toEqual("1 cat");
      expect(animalCounts("racoon", 1)).toEqual("1 racoon");
    });
    test("works for multiple animals", () => {
      expect(animalCounts("cat", 3)).toEqual("3 cats");
      expect(animalCounts("dolphin", 6)).toEqual("6 dolphins");
    });
  });

  describe("evenOrOdd()", () => {
    test("works for even numbers", () => {
      expect(evenOrOdd(0)).toEqual("Even");
      expect(evenOrOdd(2)).toEqual("Even");
      expect(evenOrOdd(-2)).toEqual("Even");
    });
    test("works for odd numbers", () => {
      expect(evenOrOdd(-1)).toEqual("Odd");
      expect(evenOrOdd(3)).toEqual("Odd");
      expect(evenOrOdd(9)).toEqual("Odd");
    });
  });
});
