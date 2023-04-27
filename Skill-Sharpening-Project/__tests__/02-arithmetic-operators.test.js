const {
  add,
  subtract,
  multiply,
  divide,
} = require("../src/02-arithmetic-operators");

describe("Arithmetic operators", () => {
  describe("add()", () => {
    test("should add two numbers", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(10, 20)).toEqual(30);
      expect(add(-10, 20)).toEqual(10);
    });
  });

  describe("subtract()", () => {
    test("should subtract two numbers", () => {
      expect(subtract(1, 2)).toEqual(-1);
      expect(subtract(10, 20)).toEqual(-10);
      expect(subtract(-10, 20)).toEqual(-30);
    });
  });

  describe("multiply()", () => {
    test("should multiply two numbers", () => {
      expect(multiply(1, 2)).toEqual(2);
      expect(multiply(10, 20)).toEqual(200);
      expect(multiply(-10, 20)).toEqual(-200);
    });
  });

  describe("divide()", () => {
    test("should divide two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(10, 5)).toEqual(2);
      expect(divide(-10, 5)).toEqual(-2);
    });
  });
});
