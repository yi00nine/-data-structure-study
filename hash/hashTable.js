function hashFn(string, limit = 7) {
  const PRIME = 31 //随意质数
  let hashCode = 0
  for (let item of string) {
    hashCode = hashCode * PRIME + item.charCodeAt() //霍纳法则
  }
  return hashCode % limit
}

function isPrime(number) {
  if (number < 1 || number === 4) return false
  const n = Math.ceil(Math.sqrt(number))
  for (let i = 2; i < n; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

export class HashTable {
  constructor() {
    this.storage = []
    this.limit = 7
    this.count = 0
    //装填因子临界值
    this.loadFactor = 0.75
    this.minLoadFactor = 0.25
  }
  //获取质数,目的加快哈希效率
  getPrime(number) {
    while (!isPrime(number)) {
      number++
    }
    return number
  }
  put(key, value) {
    const index = hashFn(key, this.limit)
    let bucket = this.storage[index]
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    bucket.push([key, value])
    this.count++
    if (this.count / this.limit > this.loadFactor) {
      this.resize(this.getPrime(this.limit * 2))
    }
  }
  get(key) {
    const index = hashFn(key, this.limit)
    const bucket = this.storage[index]
    if (!bucket) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }
  remove(key) {
    const index = hashFn(key, this.limit)
    const bucket = this.storage[index]
    if (!bucket) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        if (this.count / this.limit < this.minLoadFactor) {
          this.resize(this.getPrime(Math.floor(this.limit / 2)))
        }
        return tuple
      }
    }
    return null
  }
  resize(newLimit) {
    const oldStorage = this.storage
    this.limit = newLimit
    this.count = 0
    this.storage = []
    for (const bucket of oldStorage) {
      if (bucket) {
        for (const tuple of bucket) {
          this.put(tuple[0], tuple[1])
        }
      }
    }
  }
}
