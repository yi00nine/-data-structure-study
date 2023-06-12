class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }
  append(data) {
    let node = new Node(data)
    if (!this.header) {
      this.header = node
    } else {
      let current = this.header
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length += 1
  }
  toString() {
    let str = ''
    let current = this.header
    while (current) {
      str += current.data + '  '
      current = current.next
    }
    return str
  }
  insert(position, data) {
    if (position < 0 || position > this.length) return false
    let node = new Node(data)
    if (position === 0) {
      node.next = this.header
      this.header = node
    } else {
      let current = this.header
      let index = 0
      while (index < position) {
        if (index !== 0) current = current.next
        index += 1
      }
      node.next = current.next
      current.next = node
    }
    this.length += 1
  }
  get(position) {
    if (position < 0 || position >= this.length) return null
    let current = this.header
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    return current.data
  }
  indexOf(data) {
    let current = this.header
    let index = 0
    while (current.data !== data) {
      if (!current.next) return null
      index += 1
      current = current.next
    }
    return index
  }
  update(position, data) {
    if (position < 0 || position > this.length - 1) return false
    let current = this.header
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    current.data = data
  }
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return false
    if (position === 0) {
      this.header = this.header.next
    } else {
      let current = this.header
      let prev = null
      let index = 0
      while (index < position) {
        prev = current
        current = current.next
        index++
      }
      prev.next = current.next
    }
  }
  remove(data) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }
}
