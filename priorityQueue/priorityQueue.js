import Queue from '../queue/queue.js'
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}
export default class PriorityQueue extends Queue {
  constructor() {
    super()
  }
  enqueue(ele, priority) {
    const queueElement = new QueueElement(ele, priority)
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
}
