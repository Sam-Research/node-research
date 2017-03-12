const stdin = process.stdin

const input = () => {
  stdin.setEncoding('utf8')
  stdin.on('readable', () => {
    const chunk = stdin.read()
    if (chunk !== null) print(`data: ${chunk}`)
  })
  stdin.on('end', () => {
    print('end')
  })
}

input()
function print (msg) {
  process.stdout.write(`${msg}\n`)
}
