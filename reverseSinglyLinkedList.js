/**
 * Reverse a singly linked list recursively and iteratively.
 *
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var reverseListIterative = function(head) {
  let prev = null;
  let current = head;
  let nextNode = head;
  while (nextNode !== null) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};

var reverseListRecursive = function(head) {
  // edge case
  if (head === null || head.next === null) {
    return head;
  }
  const prev = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};