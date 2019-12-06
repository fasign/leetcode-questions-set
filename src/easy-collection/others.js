/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export var hammingWeight = function (n) {
  n = n.toString(2)
  let res = 0, len = n.length
  while(len--) {
    if(n[len] == 1) res++
  }
  return res
};