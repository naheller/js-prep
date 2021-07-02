const reverse = (array) => {
  const input = array.split('')
  const output = []

  while (input.length > 0) {
    output.push(input.pop())
  }

  return output.join().replace(/,/g, '')
}

console.log("reverse('')", reverse(''))
console.log("reverse('abcdef')", reverse('abcdef'))
