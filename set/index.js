function Set(arr = []) {
  this.items = {}
  if (arr.length) {
    arr.forEach((el) => {
      this.add(el)
    })
  }
  Set.prototype.add = function (value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }
  Set.prototype.remove = function (value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }
  Set.prototype.clear = function () {
    this.items = {}
  }
  Set.prototype.sizes = function () {
    return Object.keys(this.items).length
  }
  Set.prototype.values = function () {
    return Object.keys(this.items)
  }
  Set.prototype.union = function (newSet) {
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
console.log(set.union(set1))
