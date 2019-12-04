// Remove Duplicates from Sorted Array
export function removeDuplicates (nums) {
  let index = 0
  while(index + 1 < nums.length) {
    if(nums[index] == nums[index + 1]) {
      nums.splice(index, 1)
    } else {
      ++index
    }
  }
  return nums
}

/**
 * @param {number[]} prices
 * @return {number}
 */
// p = [10, 2, 5, 12,5]
export var maxProfit = function (prices) {
  let t = 0
  let len = prices.length - 1
  let total = 0
  while(t < len) {
    let s = t + 1
    while(prices[s - 1] < prices[s]) {
      s++
    }
    let val = prices[s - 1] - prices[t]
    if(val > 0) {
      total += val
      t = s
    } else {
      ++t
    }
  }
  return total
}

export var maxProfit2 = function (prices) {
  // 7, 1, 5, 3, 6, 4
  let dp = [0]
  let t = 1
  let maxT = 0
  while(t < prices.length) {
    dp[t] = prices[t] - prices[t - 1] + dp[maxT]
    if(dp[t] > dp[maxT]) {
      maxT = t
    }
    t++
  }
  return dp[maxT]
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export var rotate = function (nums, k) {
  if(!nums.length) return []
  k = k % nums.length
  while(k--) {
    nums.unshift(nums.pop())
  }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export var containsDuplicate = function (nums) {
  let hash = {}
  let len = nums.length
  while(len--) {
    if(hash[nums[len]]) return true
    hash[nums[len]] = 1
  }
  return false
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export var singleNumber = function (nums) {
  while(nums.length) {
    let num = nums.shift()
    let index = nums.indexOf(num)
    if(index === -1) {
      return num
    } else {
      nums.splice(index, 1)
    }
  }
};
// 原理: a^a=0
// a^0 =a
export var singleNumber2 = function (nums) {
  return nums.reduce((acc, cur) => {
    return acc ^ cur
  }, 0)
};

export const flat = arr => {
  let index = 0
  let res = []
  while(index < arr.length) {
    if(Array.isArray(arr[index])) {
      res = res.concat(flat(arr[index]))
    }else {
      res.push(arr[index])
    }
    index++
  }
  return res
}

export const flat2 = arr => {
  let index = 0
  while(index < arr.length) {
    if(Array.isArray(arr[index])) {
      let temp = arr[index]
      Array.prototype.splice.apply(arr, [index, 1].concat(temp))
    }else {
      index++
    }
  }
  return arr
}

export const flat3 = array => {
  while(array.some(item => Array.isArray(item))) {
    array = [].concat(...array).2。2
    console.log(array)
  }
  return array
}
