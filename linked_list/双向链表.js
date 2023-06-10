function DoubleLinkedList(params) {
  this.header = null
  this.tail = null
  this.length = 0
  function Node(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
  DoubleLinkedList.prototype.append = function (data) {
    let node = new Node(data)
    if (!this.header) {
      this.header = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
  }
  DoubleLinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) return false
    let node = new Node(data)
    if (this.length === 0) {
      this.header = node
      this.tail = node
    }
    if (position === 0) {
      node.next = this.header
      this.header.prev = node
      this.header = node
    } else if (position === this.length) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      if (position <= this.length / 2) {
        let current = this.header
        let index = 0
        while (index < position) {
          if (index !== 0) current = current.next
          index += 1
        }
        node.next = current.next
        current.next.prev = node
        node.prev = current
        current.next = node
      } else {
        let current = this.tail
        let index = 0
        while (this.length - index > position) {
          if (index !== 0) current = current.prev
          index += 1
        }
        node.next = current
        node.prev = current.prev
        current.prev.next = node
        current.prev = node
      }
    }
    this.length += 1
  }
  DoubleLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null
    let current
    if (position <= this.length / 2) {
      current = this.header
      let index = 0
      while (index < position) {
        current = current.next
        index++
      }
    } else {
      current = this.tail
      let index = 0
      while (this.length - index - 1 > position) {
        console.log(current)
        current = current.prev
        index++
      }
    }

    return current.data
  }
  DoubleLinkedList.prototype.indexOf = function (data) {
    let current = this.header
    let index = 0
    while (current.data !== data) {
      if (!current.next) return null
      index += 1
      current = current.next
    }
    return index
  }
  DoubleLinkedList.prototype.update = function (position, data) {
    if (position < 0 || position > this.length - 1) return false
    let current = this.header
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    current.data = data
  }
  DoubleLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position > this.length - 1) return false
    let current = this.header
    if (this.length === 1) {
      this.header = null
      this.tail = null
    } else {
      if (position === 0) {
        this.header.next.prev = null
        this.header = this.header.next
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.pre = current.prev
      }
    }
    this.length += 1
    return current.data
  }
  DoubleLinkedList.prototype.remove = function (data) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }
  DoubleLinkedList.prototype.forwardString = function () {
    let str = ''
    let current = this.tail
    while (current) {
      str += current.data + '  '
      current = current.prev
    }
    return str
  }
  DoubleLinkedList.prototype.backwardString = function () {
    let str = ''
    let current = this.header
    while (current) {
      str += current.data + '  '
      current = current.next
    }
    return str
  }
}
let doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.append(1)
doubleLinkedList.append(22)
doubleLinkedList.append(333)
doubleLinkedList.insert(3, 4444)
doubleLinkedList.update(0, 9999)
doubleLinkedList.remove(9999)
console.log(doubleLinkedList.get(3))
console.log(doubleLinkedList.indexOf(22))
console.log(doubleLinkedList.backwardString())
console.log(doubleLinkedList.forwardString())
