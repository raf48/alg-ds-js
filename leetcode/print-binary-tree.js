/**
 * Print a binary tree in an m*n 2D string array following these rules:
 *
 * 1. The row number m should be equal to the height of the given binary tree.
 * 2. The column number n should always be an odd number.
 * 3. The root node's value (in string format) should be put in the exactly
 *    middle of the first row it can be put. The column and the row where the
 *    root node belongs will separate the rest space into two parts
 *    (left-bottom part and right-bottom part). You should print the left
 *    subtree in the left-bottom part and print the right subtree in the
 *    right-bottom part. The left-bottom part and the right-bottom part should
 *    have the same size. Even if one subtree is none while the other is not,
 *    you don't need to print anything for the none subtree but still need to
 *    leave the space as large as that for the other subtree.
 *    However, if two subtrees are none, then you don't need to leave space
 *    for both of them.
 * 4. Each unused space should contain an empty string "".
 * 5. Print the subtrees following the same rules.
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
 * @return {string[][]}
 */
var printTree = function(root) {
  if (!root) return root;

  const getHeight = function(node) {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  const h = getHeight(root);
  const w = (1 << h) - 1;
  const res = [];
  for (let i = 0; i < h; i++) {
    res.push(new Array(w).fill(''));
  }

  // recursively fill the result array
  const fillHelp = function(node, row, col, gap) {
    if (row > h) return;

    fillHelp(node.left,  row + 1, Math.floor(col/2), gap);
    fillHelp(node.right, row + 1, Math.floor(col/2), gap);
    res[row][col] = (node === null) ? '' : node.val;
  }

  fillHelp(root, 0, Math.floor(w/2), 0);

  return res;
};

/*
    1
   / \
  2   3
 / \ / \
4  5 6  7
*/
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

// tree.right.right.left = new TreeNode(8);
// tree.right.right.left.left = new TreeNode(9);

console.log(printTree(tree));