// Returns true or false, indicating whether the given number is prime.

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

const isPrimeEfficient = (num) => {
  for (let i = 2; i <= Math.ceil(num / 2); i++) {
    if (num % i === 0) return false
  }
  return true
}

console.log('54', isPrimeEfficient(54))
console.log('73', isPrimeEfficient(73))
console.log('123', isPrimeEfficient(123))
console.log('91', isPrimeEfficient(91))
console.log('11', isPrimeEfficient(11))
