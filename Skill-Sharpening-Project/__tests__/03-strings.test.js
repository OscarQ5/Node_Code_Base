const {
  returnNonEmptyString,
  getLengthOfString,
  concatenateStrings,
  accessCharacterInString,
} = require("../src/03-strings");

describe("Strings", () => {
  describe("returnNonEmptyString()", () => {
    test("should return a non-empty string", () => {
      const actual = returnNonEmptyString();
      expect(typeof actual).toEqual("string");
      expect(actual.length).toBeGreaterThan(0);
    });
  });

  describe("getLengthOfString()", () => {
    test("should return a number representing the length of the string", () => {
      expect(getLengthOfString("abc")).toEqual(3);
      expect(getLengthOfString("hello")).toEqual(5);
      expect(getLengthOfString("")).toEqual(0);
    });
  });

  describe("concatenateStrings()", () => {
    test("should join three strings together", () => {
      expect(concatenateStrings("a", "b", "c")).toEqual("abc");
      expect(concatenateStrings("he", "llo", "!")).toEqual("hello!");
      expect(concatenateStrings("join", " ", "words")).toEqual("join words");
    });
  });

  describe("accessCharacterInString()", () => {
    test("should return a single character at the given position", () => {
      expect(accessCharacterInString("abc", 1)).toEqual("b");
      expect(accessCharacterInString("word", 0)).toEqual("w");
      expect(accessCharacterInString("abc", 3)).toEqual(undefined);
    });
  });
});
