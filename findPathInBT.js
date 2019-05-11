/**
 * Find path using iterative and recursive pre-order DFS
 * Both perform in O(n) complexity
 */
const Node = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const findPathIterative = function(root, goal) {

  const stack = [root];
  const map = new Map(); // use map to store child -> parnet links
  map.set(root, null);

  // helper method used to unwind the path back to the root node
  const reconstructPath = function(node, map) {
    const arr = [];
    while (node !== null) {
      arr.unshift(node);
      node = map.get(node);
    }
    return arr;
  }

  while (stack.length) {
    const node = stack.pop();

    if (node === goal) {
      return reconstructPath(node, map);
    }

    if (node.left !== null) {
      stack.push(node.left);
      map.set(node.left, node);
    }
    if (node.right !== null) {
      stack.push(node.right);
      map.set(node.right, node);
    }
  }

  return false;
}

const findPathRecursive = function(root, goal) {
  // Use a helper function
  const helper = function(node, goal, array) {
    // base case
    if (!node) return false;

    array.push(node);
    // if current node is our goal or one of the
    // children nodes contains our goal
    if (node === goal ||
        helper(node.left, goal, array) ||
        helper(node.right, goal, array)) {
      return array;
    }
    // Pop last value from array (walk back to parent node)
    // and return false indicating that a path was not found
    array.pop();
    return false;
  }

  return helper(root, goal, []);
}
/*
      7
    4   9
   3 6   8
  2
 1 5
*/
const tree = new Node(7);
tree.left = new Node(4);
tree.right = new Node(9);
tree.right.right = new Node(8);
tree.left.left = new Node(3);
tree.left.right = new Node(6);
tree.left.left.left = new Node(2);
tree.left.left.left.left = new Node(1);
tree.left.left.left.right = new Node(5);

console.log(findPathIterative(tree, tree.left.left.left.right.left));
console.log(findPathRecursive(tree, tree.left.left.left.right.left));