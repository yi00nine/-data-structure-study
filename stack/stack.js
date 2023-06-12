export default class Stack {
  constructor() {
    this.items = []
  }
  push(val) {
    this.items.push(val)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length ? false : true
  }
  size() {
    return this.items.length
  }
  toString() {
    let result = ''
    for (let item of this.items) {
      result += item + ' '
    }
    return result
  }
}

export function decToBin(dec) {
  const stack = new Stack()
  while (dec > 0) {
    stack.push(dec % 2) // 获取余数，放入栈中
    dec = Math.floor(dec / 2) // 除数除以二，向下取整
  }
  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }

  return binaryString
}
