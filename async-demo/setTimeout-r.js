function test () {
  console.log('hi, #test')
  setTimeout(() => test(), 0)
}

test()
