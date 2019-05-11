/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// Each node in the tree is visited only once, hence complexity is O(n)
// Because of recursion, O(h) function calls will be placed on the stack
// in the worst case, where h is the height of the tree.
// Because h ∈ O(n), the space complexity is O(n)
var invertTreeRecursively = function(root) {
  if (!root) return null;
  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};

// Space complexity is O(n), since in the worst case,
// the queue will contain all nodes in one level of the binary tree.
// For a full binary tree, the leaf level has Math.ceil(n/2) = O(n) leaves
var invertTreeIterative = function(root) {
  if (!root) return null;
  const stack = [root];
  // BFS
  while (stack.length) {
    const node = stack.shift();
    // Swap using ES6 destructuring assignment array matching
    // [node.left, node.right] = [node.right, node.left];
    // Swap nodes using temp variables
    const left = node.left;
    node.left = node.right;
    node.right = left;
    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }
  return root;
};