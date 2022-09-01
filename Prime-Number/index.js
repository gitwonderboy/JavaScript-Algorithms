//  Problem: Give a natural number 'n', determine if the number 'n' is prime or Notification.

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Big-O complexity is O(n) - Linear for the following functions.
console.log(isPrime(1));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
