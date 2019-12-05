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
    array = [].concat(...array)
  }
  return array
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export var intersect = function (nums1, nums2) {
  let res = []
  let len = nums1.length
  while(len--) {
    let index = nums2.indexOf(nums1[len])
    if(index !== -1) {
      res.push(nums1[len])
      nums2.splice(index, 1)
    }
  }
  return res
};
export var intersect2 = function (nums1, nums2) {
  let hash = {}
  nums1.forEach(item => {
    if(hash[item] === undefined) {
      hash[item] = 1
    } else {
      hash[item]++
    }
  })
  return nums2.filter(item => {
    if(hash[item]) {
      hash[item]--
      return true
    }
  })
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
export var plusOne = function (digits) {
  let len = digits.length
  while(len--) {
    digits[len] = digits[len] + 1
    if(digits[len] < 10) {
      break
    } else {
      digits[len] = 0
    }
  }
  !digits[0] && digits.unshift(1)
  return digits
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export var moveZeroes = function (nums) {
  let len = nums.length
  let f = false
  while(len--) {
    if(nums[len]) {
      f = true
    } else if(f) {
      nums.push(nums.splice(len, 1))
    }
  }
  return nums
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export var twoSum = function (nums, target) {
  let obj = {}
  nums.forEach((e, i) => {
    obj[e] = i
  })
  for(let i = 0; i < nums.length; ++i) {
    let tar = target - nums[i]
    if(obj[tar] && obj[tar] != i) {
      return [i, obj[tar]]
    }
  }
};