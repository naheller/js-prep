// Returns the nth Fibonacci number.
// 1 1 2 3 5 8 13 21

const fibonacci = (n) => {
  const fibNums = []

  for (let i = 0; i <= n; i++) {
    if (fibNums.length < 2) {
      fibNums.push(i)
    } else {
      fibNums.push(fibNums[i - 2] + fibNums[i - 1])
    }
  }

  return fibNums[fibNums.length - 1]
}

const fibonacciResursive = (n) => {
  if (n === 0 || n === 1) {
    return n
  } else {
    return fibonacciResursive(n - 1) + fibonacciResursive(n - 2)
  }
}

const getFibs = (length) => {
  const fibs = []
  for (let i = 0; i <= length; i++) {
    fibs.push(fibonacciResursive(i))
  }
  return fibs
}

console.log('getFibs(20)', getFibs(20))

// console.log('0', fibonacci(0))
// console.log('1', fibonacci(1))
// console.log('10', fibonacci(10))
// console.log('20', fibonacci(20))
// console.log('50', fibonacci(50))
