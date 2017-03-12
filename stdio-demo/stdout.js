const print = msg => process.stdout.write(`${msg}\n`)

print('helo, process.stdout, i am printing the msg')

// Console.prototype.log = function(...args) {
//   this._stdout.write(`${util.format.apply(null, args)}\n`);
// }
