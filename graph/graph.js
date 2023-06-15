import Dictionary from '../map/map.js'
import Queue from '../queue/queue.js'
export default class Graph {
  constructor() {
    this.vertexes = [] //顶点
    this.adjList = new Dictionary()
  }
  addVertex(val) {
    this.vertexes.push(val)
    this.adjList.set(val, [])
  }
  addEdge(val1, val2) {
    this.adjList.get(val1).push(val2)
    this.adjList.get(val2).push(val1)
  }
  toString() {
    let res = ''
    for (let i = 0; i < this.vertexes.length; i++) {
      res += this.vertexes[i] + '-->'
      let adj = this.adjList.get(this.vertexes[i])
      for (let j = 0; j < adj.length; j++) {
        res += adj[j] + ' '
      }
      res += '/n'
    }
    return res
  }
  initColor() {
    let colors = []
    this.vertexes.forEach((el) => {
      colors[el] = 'white'
    })
    return colors
  }
  bfs(v, handle) {
    let colors = this.initColor()
    let queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      let qv = queue.dequeue()
      let qAdj = this.adjList.get(qv)
      colors[qv] = 'gray'
      for (let i = 0; i < qAdj.length; i++) {
        if (colors[qAdj[i]] === 'white') {
          colors[qAdj[i]] = 'gray'
          queue.enqueue(qAdj[i])
        }
      }
      colors[qv] = 'black'
      if (handle) {
        handle(qv)
      }
    }
  }
  dfs(v, handle) {
    let colors = this.initColor()
    for (let i = 0; i < this.vertexes.length; i++) {
      this.dfsVisit(this.vertexes[i], colors, handle)
    }
  }
  dfsVisit(val, colors, handle) {
    colors[val] = 'gray'
    if (handle) {
      handle(val)
    }
    let adj = this.adjList.get(val)
    for (let i = 0; i < adj.length; i++) {
      if (colors[adj[i]] === 'white') {
        this.dfsVisit(adj[i], colors, handle)
      }
    }
    colors[val] = 'black'
  }
}
