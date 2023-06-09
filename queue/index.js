function Queue(params) {
  this.items = []
}
Queue.prototype.enqueue = function (ele) {
  this.items.push(ele)
}
Queue.prototype.dequeue = function () {
  return this.items.shift()
}
Queue.prototype.front = function () {
  return this.items[0]
}
Queue.prototype.isEmpty = function () {
  return this.items.length === 0
}
Queue.prototype.size = function () {
  return this.items.length
}
Queue.prototype.toString = function () {
  return this.items.toString()
}
let queue = new Queue()

//击鼓传花
function cal(nameList, n = 5) {
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  while (queue.size() > 1) {
    for (let i = 1; i <= n; i++) {
      if (i === n) {
        queue.dequeue()
      } else {
        queue.enqueue(queue.dequeue())
      }
    }
  }
  return nameList.findIndex((el) => el === queue.front())
}
console.log(cal([1, 2, 3, 4, 5, 6, 7], 5))
console.log(queue.items)
