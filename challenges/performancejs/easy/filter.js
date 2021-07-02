const filter = (array, fn) => {
  const result = []

  array.forEach((item) => {
    if (fn(item)) {
      result.push(item)
    }
  })

  return result
}

console.log(
  'filter([1, 2, 3, 4], n => n < 3)',
  filter([1, 2, 3, 4], (n) => n < 3)
)
