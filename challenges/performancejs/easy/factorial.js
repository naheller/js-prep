// Returns a number that is the factorial of the given number.

const factorial = (num) => {
  let result = 1

  for (let i = num; i > 1; i--) {
    result *= i
  }

  return result
}

const factorialRecursive = (num) => {
  if (num > 1) {
    return num * factorialRecursive(num - 1)
  }
  return 1
}

console.log('0', factorialRecursive(0))
console.log('1', factorialRecursive(1))
console.log('6', factorialRecursive(6))
