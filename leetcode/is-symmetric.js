/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Check recursively whether a binary tree it is a mirror of of itself
 * (ie, symmetric around its center)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricRecursive = function(root) {
  
  if (!root) return true;
  
  // Pre-order DFS
  // Time complexity is O(n)
  // Space complexity is O(1) (if we ignore recursion stack)
  const helper = function(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;

    return left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left);
  }
  
  return helper(root.left, root.right);
};
/**
 * Check iteratively whether a binary tree it is a mirror of of itself
 * (ie, symmetric around its center)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricIterative = function(root) {

  if (!root) return true;
  
  const lStack = [root.left];
  const rStack = [root.right];
  
  // Pre-order DFS
  // Time complexity is O(n)
  // Space complexity is O(height of tree)
  while (lStack.length) {
    const left  = lStack.pop();
    const right = rStack.pop();
    
    if (left === null && right === null) continue;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    
    lStack.push(left.left, left.right);
    rStack.push(right.right, right.left);
  }
  
  return true;
};