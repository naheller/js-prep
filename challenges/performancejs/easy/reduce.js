const reduce = (array, fn, initial) => {
  let result = initial

  array.forEach((item) => {
    result = fn(result, item)
  })

  return result
}

console.log(
  'reduce([1, 2, 3, 4], (a, b) => a + b, 0)',
  reduce([1, 2, 3, 4], (a, b) => a + b, 0)
)
