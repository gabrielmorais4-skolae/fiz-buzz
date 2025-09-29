const FIZZ_NUMBER = 3;
const BUZZ_NUMBER = 5;
const POP_NUMBER = 7;
const MAX_NUMBER = 105;
const MIN_NUMBER = 1;

const mappedValues = {
  [FIZZ_NUMBER]: "Fizz",
  [BUZZ_NUMBER]: "Buzz",
  [POP_NUMBER]: "Pop",
};

function fizzBuzzValue(i) {
  if (i < MIN_NUMBER || i > MAX_NUMBER) {
    throw new Error("Number out of range");
  }

  const word = Object.keys(mappedValues)
    .filter((key) => i % key === 0)
    .map((key) => mappedValues[key])
    .join("");

  return word || i;
}

function runFizzBuzz() {
  for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    console.log(fizzBuzzValue(i));
  }
}

runFizzBuzz();

module.exports = {
  fizzBuzzValue,
  MAX_NUMBER,
  MIN_NUMBER,
};
