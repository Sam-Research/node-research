// source: https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#q-1
setTimeout(function () {
  console.log(1)
}, 0)

new Promise(function executor (resolve) {
  console.log(2)
  for (var i = 0; i < 10000; i++) {
    i === 9999 && resolve()
  }
  console.log(3)
}).then(function () {
  console.log(4)
})
console.log(5)

// result: 2，3，5，4，1
// new Promise 是同步， then 是异步
// setTimeout 在 next 队列，所以最后输出
