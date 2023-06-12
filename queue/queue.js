export default class Queue {
  constructor() {
    this.items = []
  }
  enqueue(ele) {
    this.items.push(ele)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    return this.items.toString()
  }
}
//击鼓传花
export function cal(nameList, n = 5) {
  let queue = new Queue()
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
