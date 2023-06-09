// 栈结构的实现
function Stack() {
  this.items = []
}
Stack.prototype.push = function (val) {
  this.items.push(val)
}
Stack.prototype.pop = function () {
  return this.items.pop()
}
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1]
}
Stack.prototype.isEmpty = function () {
  return this.items.length ? false : true
}
Stack.prototype.size = function () {
  return this.items.length
}
Stack.prototype.toString = function () {
  return this.items.toString()
}
let s = new Stack()

//十进制转二进制
function decToBin(params) {
  while (params > 0) {
    s.push(params % 2)
    params = Math.floor(params / 2)
  }
  let bin = ''
  console.log(s.isEmpty)
  while (!s.isEmpty()) {
    bin += String(s.pop())
  }
  return bin
}

console.log(decToBin(4))
