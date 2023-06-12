import LinkedList from './linkedList.js'
const linkedList = new LinkedList()
linkedList.append('AA')
linkedList.append('BB')
linkedList.append('CC')
console.log(linkedList)
linkedList.insert(0, '123')
linkedList.insert(2, '456')
console.log(linkedList.toString()) //--> 123 AA 456 BB CC
console.log(linkedList.get(0)) //--> 123
console.log(linkedList.get(1)) //--> AA
console.log(linkedList.indexOf('AA'))
linkedList.update(0, '12345')
console.log(linkedList.toString()) //--> 12345 AA 456 BB CC
linkedList.update(1, '54321')
console.log(linkedList.toString()) //--> 12345 54321 456 BB CC
linkedList.removeAt(3)
console.log(linkedList.toString()) //--> 12345 54321 456 CC
linkedList.remove('CC')
console.log(linkedList.toString()) //--> 12345 54321 456
