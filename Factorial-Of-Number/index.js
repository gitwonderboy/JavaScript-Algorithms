// Problem : Give an integer 'n', find the factorial of the integer.

function factorialNumber(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

// Big-O Notation for this function is O(n) - Linear - n+2 = 1+2
console.log(factorialNumber(1));
// Big-O Notation for this function is O(n) - Linear - n+2 = 3+2
console.log(factorialNumber(3));
// Big-O Notation for this function is O(n) - Linear - n+2 = 5+2
console.log(factorialNumber(5));
