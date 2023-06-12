import Queue, { cal } from './queue.js'
const queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
console.log(queue.items)

queue.dequeue()
queue.dequeue()
console.log(queue.items)

console.log(queue.front())

console.log(queue.isEmpty())

console.log(queue.size())

console.log(queue.toString())
