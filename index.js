const FIZZ_NUMBER = 3;
const BUZZ_NUMBER = 5;
const MAX_NUMBER = 100;

function fizzBuzzValue(i) {
  if (i < 1 || i > MAX_NUMBER) {
    throw new Error("Number out of range");
  }

  const word =
    (i % FIZZ_NUMBER === 0 ? "Fizz" : "") +
    (i % BUZZ_NUMBER === 0 ? "Buzz" : "");
  return word || i;
}

function runFizzBuzz() {
  for (let i = 1; i <= MAX_NUMBER; i++) {
    console.log(fizzBuzzValue(i));
  }
}

runFizzBuzz();

module.exports = fizzBuzzValue;
