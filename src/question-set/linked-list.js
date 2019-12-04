/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

let node =  {
  val: 3,
  next: {
    val: 4,
    next: null
  }
}
export var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export var removeNthFromEnd = function (head, n) {
  let cur = head
  let prev = null
  while(cur.next) {
    cur.prev = prev
    prev = cur
    cur = cur.next
  }
  cur.prev = prev
  n--
  while(n--) {
    cur = cur.prev
  }
  if(cur.next) {
    cur.val = cur.next.val
    cur.next = cur.next.next
  } else {
    if(cur.prev) {
      cur.prev.next = null
    } else {
      head = null
    }
  }
  return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var reverseList = function (head) {
  if(!head) return head
  let cur = head
  let prev = null
  while(cur.next) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  cur.next = prev
  head = cur
  return head
};