// Problem : Give a number 'n', find the 'n' element of the Fibonacci Sequence.

const fibonacciSequence = [0, 1];

function findNumberFibonacciSequence(n) {
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }
  return fibonacciSequence;
}
// Big-O Notation for this function is O(n) - Linear - n+2 = 3+2
console.log(findNumberFibonacciSequence(3));

// Big-O Notation for this function is O(n) - Linear - n+5 = 5+2
console.log(findNumberFibonacciSequence(5));

// Big-O Notation for this function is O(n) - Linear - n+7 = 7+2
console.log(findNumberFibonacciSequence(7));
