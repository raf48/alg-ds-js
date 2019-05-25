/**
 * Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise
 * starting from the root.
 **/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {string}
 */
var printTreeBoundary = function(root) {

  if (!root) return [];

  const isLeaf = node => !node.left && !node.right;

  // pre-order DFS
  const traverseLeft = function(root) {
    if (!root || isLeaf(root)) return;
    res.push(root.val);
    traverseLeft(root.left);
  }

  // in-order DFS
  const traverseLeaves = function(root) {
    if (!root) return;
    traverseLeaves(root.left);
    if (!root.left && !root.right) {
      res.push(root.val);
    } else {
      traverseLeaves(root.right);
    }
  }

  // post-order DFS
  const traverseRight = function(root) {
    if (!root || isLeaf(root)) return;
    traverseRight(root.right);
    res.push(root.val);
  }

  const res = [];
  traverseLeft(root);
  traverseLeaves(root);
  traverseRight(root.right); // avoid pushing root for the second time

  return res.join(' > ');
};

var printTreeBoundary2 = function(root) {

  if (!root) return [];

  // pre-order DFS
  const traverseLeft = function(root) {
    res.push(root.val);
    if (root.left)  traverseLeft(root.left);
    if (root.right) traverseBottom(root.right);
  }

  // post-order DFS
  const traverseRight = function(root) {
    if (root.left)  traverseBottom(root.left);
    if (root.right) traverseRight(root.right);
    res.push(root.val);
  }

  // get all leaf nodes
  const traverseBottom = function(root) {
    if (!root.left && !root.right) {
      res.push(root.val);
    } else {
      if (root.left)  traverseBottom(root.left);
      if (root.right) traverseBottom(root.right);
    }
  }

  const res = [root.val];
  if (root.left)  traverseLeft(root.left);
  if (root.right) traverseRight(root.right);

  return res.join(' > ');
};

/*
      1
     / \
    2   3
   /   / \
  4    6  7
         /
        8
       /
      9
*/
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
// tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

tree.right.right.left = new TreeNode(8);
tree.right.right.left.left = new TreeNode(9);

console.log(printTreeBoundary(tree));
console.log(printTreeBoundary2(tree));