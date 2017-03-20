class AppError extends Error {
  constructor (msg) {
    // trans to AppError type, and remove 'Error:'
    if (msg instanceof Error) msg = msg.message
    super(msg)
    this.name = this.constructor.name
  }
}

const msg = 'I am a normal error msg.'
console.error(new AppError(msg))
console.error(new AppError(new Error('i am an Error instance, but you do not see "Error:".')))

try {
  throw new Error('sth error!')
} catch (e) {
  console.error(new AppError(e))
}
