/**
 * Find shortest path from source to destination on a 2D grid.
 * Start from upper left corner and end when reaching destination
 * point (9). Apply Breadth-first search for unweighted directed graph.
 * When reaching desitination point reconstruct path array.
 * Time complexity = O(N), where N is the number of grid cells
 */
const findShortestPath2D = function(grid) {

  const height = grid.length;
  const width  = grid[0].length;

  if (height === 0 || width === 0) return -1;

  // recursively reconstruct path and return as array
  const reconstructPath = function(current, map, arr) {
    if (current === null) return arr;
    arr.unshift(current);
    return reconstructPath(map.get(current), map, arr);
  }

  // array used when calculating directions
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const start = [0, 0]; // start at upper left corner => [0, 0]
  const queue = [];
  const visitedCells = new Set();
  const pathMap = new Map(); // map used when reconstructing path

  queue.push(start);
  visitedCells.add(0);
  pathMap.set(start, null);

  while (queue.length) {
    let queueSize = queue.length;

    while (queueSize) { // same as while (queueSize > 0)
      const node = queue.shift();

      // loop through all possible adjacent cells
      for (let i = 0; i < dir.length; i++) {
        const dx = node[0] + dir[i][0];
        const dy = node[1] + dir[i][1];
        const cur = [dx, dy];
        const curNum = dx << 16 | dy; // or use toString => [dx,dy].toString()

        if (dx >= 0 && dy >= 0 && dx < height && dy < width &&
            !visitedCells.has(curNum)) {
          // if adjacent cell is target cell reconstruct and return path array
          if (grid[dx][dy] === 9) {
            return reconstructPath(node, pathMap, []);
          }
          if (grid[dx][dy] === 1) {
            pathMap.set(cur, node);  // store path to parent cell
            visitedCells.add(curNum);  // mark cell as visited
            queue.push(cur);  // add cell to the queue
          }
        }
      }
      queueSize--;
    }
  }

  // if no path found that means destination point is not reachable
  return -1;
}

console.log(findShortestPath2D([
  // spiral maze
  [1,0,1,1,1,1,1,1,1,1],
  [1,0,1,0,0,0,0,0,0,1],
  [1,0,1,0,1,1,1,1,0,1],
  [1,0,1,0,1,0,0,1,0,1],
  [1,0,1,0,1,1,0,1,0,1],
  [1,0,1,0,1,1,0,1,0,1],
  [1,0,1,0,0,1,0,1,0,1],
  [1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1,0,9],
]));