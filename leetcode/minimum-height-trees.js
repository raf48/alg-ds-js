/*
 * For an undirected graph with tree characteristics, we can choose any node
 * as the root. The result graph is then a rooted tree. Among all possible
 * rooted trees, those with minimum height are called minimum height
 * trees (MHTs). Given such a graph, write a function to find all the MHTs
 * and return a list of their root labels.
 *
 * Example 1:
 * Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]
 *
 *      0
 *      |
 *      1  <---
 *     / \
 *    2   3
 *
 * Output: [1]
 *
 * Example 2:
 * Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
 *
 *    0  1  2
 *     \ | /
 *       3  <---
 *       |
 *       4  <---
 *       |
 *       5
 *
 *  Output: [3, 4]
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  // edge case
  if (n === 1) return [0];

  // create a graph
  // Graph(edge => Set(neighbouring edges))
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = new Set();  // init graph edges
  }

  // fill graph with values, example:
  // edges = [[0,1], [0,2]]
  // 0-1
  // |    =>  Graph({0: Set(1,2), 1: Set(0), 2: Set(0)})
  // 2
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    graph[edge[0]].add(edge[1]);
    graph[edge[1]].add(edge[0]);
  }

  // init leaves array containing leaf (edge) values
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (graph[i].size === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    n -= leaves.length;
    const newLeaves = [];
    for (let i = 0; i < leaves.length; i++) {
      const leaf = leaves[i];
      const neighbour = graph[leaf].keys().next().value;
      // remove pointer to leaf node from it's neighbour's edge
      graph[neighbour].delete(leaf);

      if (graph[neighbour].size === 1) {
        newLeaves.push(neighbour);
      }
    }

    leaves = newLeaves;
  }

  return leaves;
};