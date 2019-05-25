/**
 * Given a binary tree, return all root-to-leaf paths.
 * Note: A leaf is a node with no children.
 * Example:
 *    1
 *  /   \
 * 2     3
 *  \
 *   5
 *
 * Output: ["1->2->5", "1->3"]
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
  In worst case the tree is height balanced,
  so there would be N/2 amount of leaf nodes, height is logN, hence:
  Complexity = O(N/2*logN) => O(N*logN)
  Space: O(n)
*/
// DFS recursively
var binaryTreePathsDFS = function(root) {

  const res = [];

  const helper = function(node, current) {
    if (!node) return;

    current += node.val;
    if (!node.left && !node.right) {
      res.push(current);
    } else {
      helper(node.left,  current + '->');
      helper(node.right, current + '->');
    }
  }

  // In case you need to just return plain array with paths
  // without a delimiter
  const helperNoDelimiter = function(node, current) {
    if (!node) return;

    current.push(node.val);
    if (!node.left && !node.right) {
      res.push(Array.from(current)); // copy contents of the current array
    } else {
      helper(node.left,  current);
      helper(node.right, current);
    }
    current.pop();
  }

  helper(root, '');
  // helperNoDelimiter(root, []);

  return res;
};

// BFS + queue
var binaryTreePathsBFS = function(root) {

  if (!root) return [];

  const res = [];
  const queue = [root, ''];

  while (queue.length) {
    const node = queue.shift();
    const path = queue.shift();

    if (!node.left && !node.right) {
      res.push(path + node.val);
    } else {
      if (node.right) {
        queue.push(node.right, path + node.val + '->');
      }
      if (node.left) {
        queue.push(node.left, path + node.val + '->');
      }
    }
  }

  return res;
};
