const EventEmitter = require('events')

const event = new EventEmitter()

event.on('event', () => {
  console.log('hi, #1')
  event.emit('event')
})

event.emit('event')

// result: #1, ....;RangeError: Maximum call stack size exceeded
// 死循环
