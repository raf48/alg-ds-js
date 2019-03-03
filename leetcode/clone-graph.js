/**
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph. Each node in the graph
 * contains a val (int) and a list (List[Node]) of its neighbors.
 */
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraphDFS = function(graph) {
  if (!graph) return graph;
  
  const vMap = {};
  
  // Clone graph with recursive DFS
  const traverse = V => {
    if (!vMap[V.label]) {
      vMap[V.label] = new UndirectedGraphNode(V.label);
      vMap[V.label].neighbors = V.neighbors.map(traverse);
    }
    
    return vMap[V.label];
  }
  
  return traverse(graph);
};

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraphBFS = function(graph) {
  if (!graph) return graph;
  
  // map <label : new UndirectedGraphNode()>
  const map = { [graph.label] : new UndirectedGraphNode(graph.label) };
  const stack = [graph];
  
  // Apply iterative BFS
  while (stack.length) {
    const node = stack.shift();
    
    for (let i = 0; i < node.neighbors.length; i++) {      
      const label = node.neighbors[i].label;
      if (!map[label]) {
        map[label] = new UndirectedGraphNode(label);
        stack.push(node.neighbors[i]);
      }
      map[node.label].neighbors.push(map[label]);
    }
  }
  
  return map[graph.label];
};