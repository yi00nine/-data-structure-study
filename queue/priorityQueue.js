function PriorityQueue(params) {
  function QueueEle(ele, priority) {
    this.element = ele
    this.priority = priority
  }
  PriorityQueue.prototype.enqueue = function (ele, priority) {
    let queueElement = new QueueEle(ele, priority)
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      let add = false
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          add = true
          break
        }
      }
      if (!add) {
        this.items.push(queueElement)
      }
    }
  }
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }
  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  PriorityQueue.prototype.size = function () {
    return this.items.length
  }
  PriorityQueue.prototype.toString = function () {
    return this.items.toString()
  }
  this.items = []
}

let queue = new PriorityQueue()
queue.enqueue(1, 133)
queue.enqueue(2, 33)
queue.enqueue(3, 1133)
queue.enqueue(4, 11)
console.log(queue.items)
