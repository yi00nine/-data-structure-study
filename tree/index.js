import { BinarySearchTree } from './tree.js'

const tree = new BinarySearchTree()

tree.insert(4)
tree.insert(5)
tree.insert(2)
tree.insert(1)
tree.insert(6)
tree.insert(7)
tree.insert(3)
tree.insert(9)
tree.insert(8)

console.log(tree)
console.log(tree.preOrderTraversal())
// console.log(tree.inOrderTraversal())
// console.log(tree.postOrderTraversal())
console.log(tree.min())
console.log(tree.max())
console.log(tree.search(2))
tree.remove(6)
console.log(tree.preOrderTraversal())
