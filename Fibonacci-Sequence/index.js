// Problem : Give a number 'n', find the 'n' element of the Fibonacci Sequence.

const fibonacciSequence = [0, 1];

function findNumberFibonacciSequence(n) {
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }
  return fibonacciSequence;
}

console.log(findNumberFibonacciSequence(3));
console.log(findNumberFibonacciSequence(5));
console.log(findNumberFibonacciSequence(7));
