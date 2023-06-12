import Stack, { decToBin } from './stack.js'
const stack = new Stack()

// push() 测试
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.items)

console.log(stack.pop())
console.log(stack.peek())

console.log(stack.isEmpty())

console.log(stack.size())

console.log(stack.toString())

console.log(decToBin(100))
console.log(decToBin(88))
