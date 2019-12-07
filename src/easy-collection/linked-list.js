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

export var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};

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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let l1 = {
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
export var mergeTwoLists = function (l1, l2) {
  if(!l1&&!l2) return l1
  let l = {
    val: 'holder',
    next: null
  }
  let cur = l
  let val
  while(l1 && l2) {
    if(l1.val < l2.val) {
      val = l1.val
      l1 = l1.next
    } else {
      val = l2.val
      l2 = l2.next
    }
    cur.val = val
    cur.next = {
      val: 'holder',
      next: null
    }
    cur = cur.next
  }
  l1 = l1 || l2
  while(1) {
    cur.val = l1.val
    cur.next = {
      val: 'holder',
      next: null
    }
    l1 = l1.next
    if(l1) {
      cur = cur.next
    } else {
      break
    }
  }
  cur.next = null
  return l
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export var isPalindrome = function (head) {
  if(!head) return true
  let prev = null
  let cur = head
  while(1) {
    cur.prev = prev
    prev = cur
    if(cur.next) {
      cur = cur.next
    } else {
      break
    }
  }
  while(1) {
    if(head.val !== cur.val) return false
    if(cur === head || !cur.prev || !head.next) {
      break
    }
    head = head.next
    cur = cur.prev
  }
  return true
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  while(head) {
    if(head.visited) return true
    head.visited = true
    head = head.next
  }
  return false
};

// todo: hasCycle2
