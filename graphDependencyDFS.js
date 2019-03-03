class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    // directed graph
    this.AdjList.get(v).push(w);
  }

  printGraph() {
    const keys = this.AdjList.keys();
    for (let item of keys) {
      console.log(item, '->', this.AdjList.get(item).join(', '));
    }
  }

  findPath() {
    // graph traversal using DFS
    // start from vertices that don't have an edge

    const res = [];

    const discoveredPaths = new Map();

    for (let v of this.AdjList.keys()) {
      const stack = [v];
      const visited = new Set(); // keep track of visited nodes

      while (stack.length) {

        const el = stack.pop();

        // skip previously visited elements
        if (visited.has(el)) {
          continue;
        }

        if (!discoveredPaths.has(el)) {
          discoveredPaths.set(el, new Set());
          res.push(el);
        }

        visited.add(el);

        const paths = this.AdjList.get(el);
        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          stack.push(path);
          if (discoveredPaths.has(path) && discoveredPaths.get(path).has(el)) {
            console.log('cycle found!');
            return [];
          }
          discoveredPaths.get(el).add(path);
        }

      }
    }

    return res;
  }
}

const graph = new Graph(vertices.length);

['A', 'B', 'C', 'D', 'E', 'F', 'X'].forEach(el => graph.addVertex(el));

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('C', 'E');
graph.addEdge('D', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('C', 'F');
// graph.addEdge('E', 'D'); // cycle

// graph.printGraph();
console.log(graph.findPath());