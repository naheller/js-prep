const sum = (a, b) => a + b
const sumIndefinite = (...args) => args.reduce((acc, curr) => acc + curr)

const currySum = (a) => (b) => a + b

const curryCustomFn = (fn, ...values) => {
  return (...next) => {
    if (next.length > 0) {
      return curryCustomFn(fn, ...values, ...next)
    } else {
      return fn(...values)
    }
  }
}

// const sumResult = sum(1, 2)
// const sumIndefiniteResult = sumIndefinite(1, 2, 3, 4)
// const currySumResult = currySum(1)(2)
const curryCustomFnResult = curryCustomFn(sumIndefinite)(1)(2)(3)(4)(5)()

// console.log('sumResult', sumResult)
// console.log('sumIndefiniteResult', sumIndefiniteResult)
// console.log('currySumResult', currySumResult)
console.log('curryCustomFnResult', curryCustomFnResult)
