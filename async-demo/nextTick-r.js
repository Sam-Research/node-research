function test () {
  console.log('hi, #test')
  process.nextTick(() => { test() })
}

test()
