import * as arr from './array'
import * as dp from './dp'
import * as str from './string'
import * as trees from './trees'
import * as sorting from './sorting'
import * as others from './others'
import * as linkedList from './linked-list'

import {appendRes, appendDelimiter} from '../utils'

let demo
/**
 * array
 */
appendDelimiter('Array')
let res = arr.removeDuplicates([1, 1,1, 1, 2,2, 2,3,3,4,4,5])
appendRes('removeDuplicates:', res)

res = arr.maxProfit([7, 1, 5, 3, 6, 4])
appendRes('maxProfit:', res)

res = arr.rotate([1, 2, 3, 4, 5, 6, 7], 3)
appendRes('rotate:', res)
demo = [1, [8, 5], [6, 4, 8, [8, 3, [5, 9]]]]
// demo = [1, [2, [10, [6, 7], 3, [9], 8, [4, [5]]]]]

res = arr.intersect2([8, 0, 3], [0, 0])
appendRes('intersect:', res)

res = arr.plusOne([9,9,9,9,9])
appendRes('plusOne:', res)

res = arr.moveZeroes([0,2,0,5,0,3,4,1,9])
appendRes('moveZeroes:', res)

res = arr.isValidSudoku([
  [".", ".", ".", ".", ".", ".", ".", ".", "."], 
  ["8", ".", ".", ".", ".", "7", ".", ".", "."], 
  [".", ".", ".", "8", ".", ".", ".", ".", "."], 
  [".", ".", ".", ".", "9", ".", "2", ".", "5"], 
  ["8", ".", ".", ".", ".", ".", ".", ".", "."], 
  [".", ".", ".", ".", ".", ".", ".", ".", "."], 
  [".", "3", ".", ".", "6", ".", ".", ".", "."], 
  [".", ".", ".", ".", ".", ".", ".", "8", "."], 
  [".", ".", "9", ".", ".", ".", ".", ".", "."]
])

appendRes('isValidSudoku:', res)

demo = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]

// target = [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11]
// ]
arr.rotateMatrix(demo)
appendRes('rotateMatrix:', demo)

/**
 * dp
 */
appendDelimiter('DP')
res = dp.maxProfit([7, 1, 5, 3, 6, 4])
appendRes('maxProfit:', res)


res = dp.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
appendRes('maxSubArray:', res)



res = dp.rob([2, 7, 9, 3, 1])
appendRes('rob:', res)

/**
 * String
 */
appendDelimiter('String')
res = str.reverse(10)
appendRes('reverse:', res)


res = str.firstUniqChar('loveleetcode')
appendRes('firstUniqChar:', res)

res = str.isAnagram3('a', 'b')
appendRes('isAnagram:', res)

res = str.isPalindrome('0p')
appendRes('isPalindrome:', res)

appendRes('isPalindrome:', str.myAtoi('     -10p'))

appendRes('strStr:', str.strStr('fdsfp', 'dsfp'))


/**
 * Trees
 */
appendDelimiter('Trees')
// [10,5,15,null,null,6,20]
// [0, null, -1]
demo = {
  val: 10,
  left: {
    val: 5,
    right: {
      val: 8,
      left: {
        val: 17
      }
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

res = trees.prevTraversal(demo)
console.log('prevTraversal:',res)
res = trees.midTraversal(demo)
console.log('midTraversal:',res)
res = trees.postTraversal(demo)
console.log('midTraversal:',res)
// 10,5,8,17,15,11,20
// 5,17,8,10,11,15,20
// 17,8,5,11,20,15,10

/**
 * Sorting
 */
appendDelimiter('Trees')
res = sorting.mergeArr2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
appendRes('mergeArr:', res)

/**
 * Others
 */
appendDelimiter('Others')
res = others.hammingWeight(123)
appendRes('isValidBST:', res)

/**
 * linkedList
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
appendDelimiter('linkedList')
// linkedList.removeNthFromEnd(ListNode, 1)

linkedList.reverseList(ListNode)

let l1 = {
  val: -9,
  next: {
    val: 3,
    next: null
  }
}
let l2 = {
  val: 5,
  next: {
    val: 7,
    next: null
  }
}
linkedList.mergeTwoLists(l1, l2)

demo = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }  
}

res = linkedList.isPalindrome(demo)
