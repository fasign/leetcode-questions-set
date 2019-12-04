/**
 * @param {number[]} prices
 * @return {number}
 */
export var maxProfit = function (prices) {
  // 7, 3, 8, 1, 2, 4
  let max = 0, t = 1, minT = 0
  while(t < prices.length) {
    let gap = prices[t] - prices[minT]
    if(gap > max) {
      max = gap
    } else if (prices[t] < prices[minT]) {
      minT = t
    }
    t++
  }
  return max
}


/**
 * @param {number[]} nums
 * @return {number}
 */
export var maxSubArray = function (nums) {
  // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  let prev = nums[0]
  let max = prev
  let i = 1
  while(i < nums.length) {
    prev = nums[i] + prev > nums[i] ? nums[i] + prev : nums[i]
    if(prev > max) max = prev
    i++
  }
  return max
}

/**
 * @param {number[]} nums
 * @return {number}
 */
export var rob = function (nums) {
  // [2, 7, 9, 3, 1]
  // 2,7,11,11,12
  if(!nums.length) return 0
  let dp = [nums[0]]
  let t = 1
  dp[-1] = 0
  while(t < nums.length) {
    if(nums[t] + dp[t - 2] > dp[t - 1]) {
      dp[t] = nums[t] + dp[t - 2]
    } else {
      dp[t] = dp[t - 1]
    }
    t++
  }
  return dp.pop()
};
