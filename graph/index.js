import Graph from './graph.js'
const graph = new Graph()
let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
// console.log(graph.toString())
let result = ''
// 输出广度优先
graph.bfs(myVertexes[0], function (v) {
  result += v + ' '
})
result = ''
graph.dfs(myVertexes[0], function (v) {
  result += v + ' '
})
// 输出深度优先
console.log(result) //A B E I F C D G H
