const EventEmitter = require('events')

const event = new EventEmitter()

event.on('event', () => {
  console.log('hi, #1')
})

event.on('event', () => {
  console.log('hi, #2')
})

event.emit('event')

// result: 先后顺序： #1, #2
// 事件是广播的
