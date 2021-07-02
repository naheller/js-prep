const isSorted = (array) => {
  if (array.length < 2) {
    return true
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

console.log('isSorted([])', isSorted([]))
console.log('isSorted([-Infinity, -5, 0, 3, 9])', isSorted([-Infinity, -5, 0, 3, 9]))
console.log('isSorted([3, 9, -3, 10])', isSorted([3, 9, -3, 10]))
