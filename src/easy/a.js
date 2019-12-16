// Nim Game
/**
 * @param {number} n
 * @return {boolean}
 */
export var canWinNim = function (n) {
  if(n % 4) return true
  return false
};

// Hamming Distance
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export var hammingDistance = function (x, y) {
  x = x.toString(2)
  y = y.toString(2)
  let len1 = x.length - 1
  let len2 = y.length - 1
  let res = 0
  while (len1 >= 0 && len2 >= 0) {
    if(x[len1] ^ y[len2]) {
      res++
    }
    len1--
    len2--
  }
  if(len1 < 0) {
    len1 = len2
    x = y
  }
  while (len1 >= 0) {
    if(x[len1] ^ 0) {
      res++
    }
    len1--
  }
  return res
};