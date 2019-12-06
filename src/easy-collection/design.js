/**
 * @param {number[]} nums
 */
export var Solution = function (nums) {
  this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let len = this.nums.length
  let nums = [...this.nums]
  let res = []
  while(len--) {
    let index = parseInt(Math.random() * (len + 1))
    res.push(nums[index])
    nums.splice(index, 1)
  }
  return res
};


/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.min = undefined
  this.data = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if(this.min === undefined || this.min > x) {
    this.min = x
  }
  this.data.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let data = this.data.pop()
  if(data === this.min) {
    this.min = this.data.length ? Math.min(...this.data) : undefined
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};
