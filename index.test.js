const { fizzBuzzValue, MAX_NUMBER, MIN_NUMBER } = require("./index");

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

  describe("when given a multiple of 7", () => {
    test("should return 'Pop'", () => {
      expect(fizzBuzzValue(7)).toBe("Pop");
      expect(fizzBuzzValue(14)).toBe("Pop");
      expect(fizzBuzzValue(28)).toBe("Pop");
    });
  });

  describe("when given a multiple of 3 and 5", () => {
    test("should return 'FizzBuzz'", () => {
      expect(fizzBuzzValue(15)).toBe("FizzBuzz");
      expect(fizzBuzzValue(30)).toBe("FizzBuzz");
      expect(fizzBuzzValue(60)).toBe("FizzBuzz");
    });
  });

  describe("when given a multiple of 3 and 7", () => {
    test("should return 'FizzPop'", () => {
      expect(fizzBuzzValue(21)).toBe("FizzPop");
      expect(fizzBuzzValue(42)).toBe("FizzPop");
      expect(fizzBuzzValue(63)).toBe("FizzPop");
    });
  });

  describe("when given a multiple of 5 and 7", () => {
    test("should return 'BuzzPop'", () => {
      expect(fizzBuzzValue(35)).toBe("BuzzPop");
      expect(fizzBuzzValue(70)).toBe("BuzzPop");
    });
  });

  describe("when given a multiple of 3, 5 and 7", () => {
    test("should return 'FizzBuzzPop'", () => {
      expect(fizzBuzzValue(MAX_NUMBER)).toBe("FizzBuzzPop");
    });
  });

  describe("when given invalid input", () => {
    test("should throw error for numbers below 1", () => {
      expect(() => fizzBuzzValue(MIN_NUMBER - 1)).toThrow(
        "Number out of range"
      );
    });

    test("should throw error for numbers above 100", () => {
      expect(() => fizzBuzzValue(MAX_NUMBER + 1)).toThrow(
        "Number out of range"
      );
    });
  });
});
