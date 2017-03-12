const sleep = ms => {
  const start = Date.now()
  const expire = start + ms
  let end
  while ((end = Date.now()) < expire) {
    // end = Date.now()
  }
  console.log(`sleep: ${end - start}ms`)
}

sleep(1120)

// 同步等待
