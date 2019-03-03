/**
 * Given a binary tree, find the lowest common ancestor (LCA)
 * of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as
 *  the lowest node in T that has both p and q as descendants
 *  (where we allow a node to be a descendant of itself).”
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
  const first = pathToNode(root, p);
  const second = pathToNode(root, q);

  let i = 0;
  let j = 0;

  while (i < first.length &&
         j < second.length &&
         first[i] === second[j]) {
    i++;
    j++;
  }

  return first[i - 1];
};

// Return array containg path from root to node
const pathToNode = function(root, node) {
  const helper = function(root, node, path) {
  	if (!root) return false;
  	path.push(root);
  	if (root === node) return path;
  	let ret = helper(root.left, node, path) ||
              helper(root.right, node, path);
  	if (!ret) path.pop();
  	return ret;
  }

  return helper(root, node, []);
}
/*
      6
  2       8
0   4    7 9
   3 5
*/
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
// console.log(pathToNode(root, root.left.right.left));
const lca = lowestCommonAncestor(root, root.left, root.left.right);
console.log(lca.val);