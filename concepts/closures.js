const debouncer = (fn, maxFreqMs) => {
  let allowFn = true

  return () => {
    if (allowFn === true) {
      fn()
      allowFn = false

      setTimeout(() => {
        allowFn = true
      }, maxFreqMs)
    }
  }
}

const sayHello = () => {
  console.log('hello')
}

const debouncedHello = debouncer(sayHello, 2000)
setInterval(debouncedHello, 500)

// Console will only log 'hello' every 2000 ms, despite the interval of 500ms
