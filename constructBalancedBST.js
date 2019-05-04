/**
 * Construct a Balanced Binary Search Tree from a Binary Tree
 */

const Node = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const balanceBST = function(root) {

  // In-Order traverse tree and output an array of nodes
  // Runtime: O(n)
  const inorderTraversal = function(node, arr) {
    if (!node) return;
    inorderTraversal(node.left, arr);
    arr.push(node.val);
    inorderTraversal(node.right, arr);
    return arr;
  }

  // Construct Balanced Binary Search Tree from a sorted array
  // Return the root node
  // Runtime: O(n)
  const balance = function(arr, left, right) {

    // base case
    if (left > right) return null;

    const mid = (left + right) >> 1; // divide by 2 and floor the result
    const node = new Node(arr[mid]);

    // Recursively construct the left subtree and make it left child of root
    node.left = balance(arr, left, mid - 1);
    // Recursively construct the right subtree and make it right child of root
    node.right = balance(arr, mid + 1, right);

    return node;
  }

  const arr = inorderTraversal(root, []);
  return balance(arr, 0, arr.length - 1);
}
/*
     BST           Balanced BST
      7                 4
    4   9   =>        2   7
   3 6               1 3 6 9
  2
 1
*/
const tree = new Node(7);
tree.left = new Node(4);
tree.right = new Node(9);

tree.left.left = new Node(3);
tree.left.right = new Node(6);
tree.left.left.left = new Node(2);
tree.left.left.left.left = new Node(1);

console.log(balanceBST(tree));