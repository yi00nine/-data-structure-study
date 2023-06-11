function LinkedList(params) {
  this.head = null
  this.length = 0
  function Node(data) {
    this.data = data
    this.next = null
  }
  LinkedList.prototype.append = function (data) {
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
  LinkedList.prototype.toString = function () {
    let str = ''
    let current = this.header
    while (current) {
      str += current.data + '  '
      current = current.next
    }
    return str
  }
  LinkedList.prototype.insert = function (position, data) {
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
  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null
    let current = this.header
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    return current.data
  }
  LinkedList.prototype.indexOf = function (data) {
    let current = this.header
    let index = 0
    while (current.data !== data) {
      if (!current.next) return null
      index += 1
      current = current.next
    }
    return index
  }
  LinkedList.prototype.update = function (position, data) {
    if (position < 0 || position > this.length - 1) return false
    let current = this.header
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    current.data = data
  }
  LinkedList.prototype.removeAt = function (position) {
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
  LinkedList.prototype.remove = function (data) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }
}

let linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(22)
linkedList.append(333)
linkedList.insert(1, 444)
linkedList.insert(2, 555)
linkedList.removeAt(2)
linkedList.update(2, 222)

console.log(linkedList.toString())
