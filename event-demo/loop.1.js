const EventEmitter = require('events')

const event = new EventEmitter()

const event2 = event
const types = {
  MY_NAME: 'myevent'
}
event.on(types.MY_NAME, function dosth () {
  event2.on(types.MY_NAME, dosth)
  console.log('hi, #1')
  event2.on(types.MY_NAME, () => {
    console.log('hi, #2')
  })
})

event.emit(types.MY_NAME)

// result: #1
// 事件里面event2（没有注册监听?)

