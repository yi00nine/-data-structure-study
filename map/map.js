export default class Map {
  constructor() {
    this.items = {}
  }

  has(key) {
    return this.items.hasOwnProperty(key)
  }

  set(key, value) {
    this.items[key] = value
  }

  remove(key) {
    if (!this.has(key)) return false
    delete this.items[key]
  }

  get(key) {
    return this.has(key) ? this.items[key] : undefined
  }

  keys() {
    return Object.keys(this.items)
  }

  values() {
    return Object.values(this.items)
  }

  size() {
    return this.keys().length
  }

  clear() {
    this.items = {}
  }
}
