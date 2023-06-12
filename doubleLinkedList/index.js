import DoubleLinkedList from './doubleLinkedList.js'
const doublyLinkedList = new DoubleLinkedList()
doublyLinkedList.append('ZZ')
doublyLinkedList.append('XX')
doublyLinkedList.append('CC')
doublyLinkedList.insert(0, '00')
doublyLinkedList.insert(2, '22')

console.log(doublyLinkedList.get(1))
console.log(doublyLinkedList.indexOf('XX'))
doublyLinkedList.update(0, '111111')
console.log(doublyLinkedList.remove('111111'))
console.log(doublyLinkedList.forwardString())
console.log(doublyLinkedList.backwardString())
