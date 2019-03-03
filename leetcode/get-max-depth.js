/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 * Note: A leaf is a node with no children.
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Recursively compute and return tree height
 * @param {TreeNode} root
 * @return {number}
 */
const getHeightRecursive = function(root) {
  // base case
  if (!root) return 0;
 
  return 1 + Math.max(
    getHeightRecursive(root.left),
    getHeightRecursive(root.right)
  );
}

/**
 * Iteratively compute and return tree height
 * @param {TreeNode} root
 * @return {number}
 */
const getHeightIterative = function(root) {
  let maxHeight = 0;
  // BFS
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    while (size > 0) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      size--;
    }
    maxHeight++;
  }
 
  return maxHeight;
}

/*
       10
      / \
     8   11
    / \
   6   9
  /
 4
*/
const tree = new TreeNode(10);
tree.left = new TreeNode(8);
tree.right = new TreeNode(11);

tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(9);

tree.left.left.left = new TreeNode(4);

console.log('result', getHeightIterative(tree));