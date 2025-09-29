const FIZZ_NUMBER = 3;
const BUZZ_NUMBER = 5;
const MAX_NUMBER = 100;

function fizzBuzzValue(i) {
  const word =
    (i % FIZZ_NUMBER === 0 ? "Fizz" : "") +
    (i % BUZZ_NUMBER === 0 ? "Buzz" : "");
  console.log(word || i);
}

function runFizzBuzz() {
  for (let i = 1; i <= MAX_NUMBER; i++) {
    fizzBuzzValue(i);
  }
}

runFizzBuzz();
