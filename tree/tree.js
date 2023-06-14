class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    const newNode = new Node(key)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  //先序遍历
  preOrderTraversal() {
    const result = []
    this.preOrderTraversalNode(this.root, result)
    return result
  }
  preOrderTraversalNode(node, result) {
    if (!node) return result
    result.push(node.key)
    this.preOrderTraversalNode(node.left, result)
    this.preOrderTraversalNode(node.right, result)
  }
  //中序遍历
  inOrderTraversal() {
    const result = []
    this.inOrderTraversalNode(this.root, result)
    return result
  }
  inOrderTraversalNode(node, result) {
    if (!node) return result
    this.inOrderTraversalNode(node.left, result)
    result.push(node.key)
    this.inOrderTraversalNode(node.right, result)
  }
  //后序遍历
  postOrderTraversal() {
    const result = []
    this.postOrderTraversalNode(this.root, result)
    return result
  }
  postOrderTraversalNode(node, result) {
    if (!node) return result
    this.postOrderTraversalNode(node.left, result)
    this.postOrderTraversalNode(node.right, result)
    result.push(node.key)
  }
  min() {
    if (!this.root) return null
    let node = this.root
    while (node.left) {
      node = node.left
    }
    return node.key
  }
  max() {
    if (!this.root) return null
    let node = this.root
    while (node.right) {
      node = node.right
    }
    return node.key
  }
  //查找是否有相同的key
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (!node) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    let current = this.root
    let parent = this.root
    let isLeft = true
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        current = current.left
        isLeft = true
      } else {
        current = current.right
        isLeft = false
      }
      if (!current) return false
    }
    //删除的node是叶子结点的情况
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeft) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      }
      if (isLeft) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      }
      if (isLeft) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else {
      let successor = this.getSuccessor(current)
      if (current === this.root) {
        this.root = successor
      } else if (isLeft) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
  }
  //寻找后继
  getSuccessor(delNode) {
    let successorParent = delNode
    let successor = delNode
    let current = delNode.right
    while (current) {
      successorParent = successor
      successor = current
      current = current.left
    }
    if (successor !== delNode) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}
