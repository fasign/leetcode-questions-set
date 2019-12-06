/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * {
 *  val: value,
 *  depth: depth,
 *  left: 'left children',
 *  right: ’right children‘
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export var maxDepth = function (root) {
  let max = 0
  function getDepth(data, depth) {
    if(data && data.val !== null) {
      depth++
      if(depth > max) {
        max = depth
      }
      if(data.left) {
        getDepth(data.left, depth)
      }
      if(data.right) {
        getDepth(data.right, depth)
      }
    }
  }
  getDepth(root, 0)
  return max
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export var isValidBST = function (root) {
  if(!root) return true
  let prev = -Infinity
  let isBST = true
  function midTraversal(data) {
    if(!isBST) return isBST
    data.left && midTraversal(data.left)
    if(data.val !== null){
      if(data.val <= prev) return isBST = false
      prev = data.val
    }
    data.right && midTraversal(data.right)
  }
  midTraversal(root)
  return isBST
};
let aa = {
  val: 10,
  left: {
     val: 5,
     right: {
       val: 8
     }
  },
  right: {
    val: 15,
    left: {
      val: 11
    },
    right: {
      val: 20
    }
  }
}
export var isValidBST2 = function (root) {
  if(!root) return true
  let stack = []
  let prev = -Infinity
  let cur = root
  while(stack.length || cur) {
    if(cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      if(cur.val <= prev) {
        return false
      } else {
        prev = cur.val
      }
      cur = cur.right
    }
  }
  return true
}


export var midTraversal = function (root) {
  let stack = []
  let res = []
  while(root || stack.length) {
    if(root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root.val && res.push(root.val)
      root = root.right
    }
  }
  return res
}

export const prevTraversal = function(root) {
  let res = []
  res.push(root.val)
  root.left && res.push(...prevTraversal(root.left))
  root.right && res.push(...prevTraversal(root.right))
  return res
}
export const postTraversal = function(root) {
  let res = []
  root.left && res.push(...prevTraversal(root.left))
  root.right && res.push(...prevTraversal(root.right))
  res.push(root.val)
  return res
}
