const fizzBuzzValue = require("./index");

describe("FizzBuzz", () => {
  describe("when given a regular number", () => {
    test("should return the number itself", () => {
      expect(fizzBuzzValue(1)).toBe(1);
      expect(fizzBuzzValue(2)).toBe(2);
      expect(fizzBuzzValue(4)).toBe(4);
    });
  });

  describe("when given a multiple of 3", () => {
    test("should return 'Fizz'", () => {
      expect(fizzBuzzValue(3)).toBe("Fizz");
      expect(fizzBuzzValue(6)).toBe("Fizz");
      expect(fizzBuzzValue(9)).toBe("Fizz");
    });
  });

  describe("when given a multiple of 5", () => {
    test("should return 'Buzz'", () => {
      expect(fizzBuzzValue(5)).toBe("Buzz");
      expect(fizzBuzzValue(10)).toBe("Buzz");
      expect(fizzBuzzValue(20)).toBe("Buzz");
    });
  });

  describe("when given a multiple of 3 and 5", () => {
    test("should return 'FizzBuzz'", () => {
      expect(fizzBuzzValue(15)).toBe("FizzBuzz");
      expect(fizzBuzzValue(30)).toBe("FizzBuzz");
      expect(fizzBuzzValue(60)).toBe("FizzBuzz");
    });
  });

  describe("when given invalid input", () => {
    test("should throw error for numbers below 1", () => {
      expect(() => fizzBuzzValue(0)).toThrow("Number out of range");
      expect(() => fizzBuzzValue(-1)).toThrow("Number out of range");
    });

    test("should throw error for numbers above 100", () => {
      expect(() => fizzBuzzValue(101)).toThrow("Number out of range");
      expect(() => fizzBuzzValue(150)).toThrow("Number out of range");
    });
  });
});
