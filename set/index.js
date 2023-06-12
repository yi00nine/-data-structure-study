class Set {
  constructor(arr) {
    this.items = {}
  }
  add(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }
  remove(value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }
  has(value) {
    return this.items.hasOwnProperty(value)
  }
  clear() {
    this.items = {}
  }
  sizes() {
    return Object.keys(this.items).length
  }
  values() {
    return Object.keys(this.items)
  }
  union(newSet) {
    let union = new Set()
    let values = this.values()
    values.forEach((el) => {
      union.add(el)
    })
    values = newSet.values()
    values.forEach((el) => {
      union.add(el)
    })
    return union
  }
}

let set = new Set()
let set1 = new Set()
set.add(1)
set.add(2)
set1.add(2)
set1.add(3)
console.log(set.union(set1))
