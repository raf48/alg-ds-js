/**
 * Given a binary search tree, write a function kthSmallest to find the kth
 * smallest element in it.
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  
  let res = null;
  let rank = 1;

  const setRank = function(node) {
    if (node.left) setRank(node.left);
    node.rank = rank++;
    if (node.right) setRank(node.right);
  }
  
  const traverse = function(node, rank) {
    let cur = node;

    while (cur !== null) {
      if (cur.rank === rank) return cur.val;
      if (rank > cur.rank) {
        cur = cur.right;
      } else {
        cur = cur.left;
      }
    }
    return null;
  }
  setRank(root);
  return traverse(root, k);
};

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

console.log('result', kthSmallest(tree, 3));