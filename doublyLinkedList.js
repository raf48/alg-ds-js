/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var LinkedListNode = function(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype._get = function(index) {

  let count, current;

  if (index <= this.length / 2) {
    count = 0;
    current = this.head;
    while (count !== index) {
      count++;
      current = current.next;
    }
  } else {
    count = this.length - 1;
    current = this.tail;
    while (count !== index) {
      count--;
      current = current.prev;
    }
  }

  return current;
};

MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.length) {
    return -1;
  }

  return this._get(index).val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const newNode = new LinkedListNode(val, this.head, null);
  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  this.tail = this.tail || newNode;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const newNode = new LinkedListNode(val, null, this.tail);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  this.head = this.head || newNode;
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list.
   If index equals to the length of linked list,
   the node will be appended to the end of linked list.
   If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) {
    return;
  } else if (index === this.length) {
    this.addAtTail(val);
  } else if (index <= 0) {
    this.addAtHead(val);
  } else {
    const nodeAfter = this._get(index);
    const newNode = new LinkedListNode(val, nodeAfter, nodeAfter.prev);
    nodeAfter.prev.next = newNode;
    nodeAfter.prev = newNode;
    this.length++;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.length) {
    return;
  }
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else if (index === 0) {
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
  } else if (index === this.length - 1) {
    this.tail = this.tail.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    }
  } else {
    const nodeToDelete = this._get(index);
    const next = nodeToDelete.next;
    const prev = nodeToDelete.prev;

    next.prev = prev;
    prev.next = next;
  }
  this.length--;
};