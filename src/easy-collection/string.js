/**
 * @param {number} x
 * @return {number}
 */
export var reverse = function (x) {
  if(x < -2147483648 || x > 2147483647) return 0
  let nums = []
  while(x) {
    nums.push(x % 10)
    x = parseInt(x / 10)
  }
  x = nums.reduce((acc, cur) => {
    return acc * 10 + cur
  }, 0)
  if(x < -2147483648 || x > 2147483647) return 0
  return x
};

/**
 * @param {string} s
 * @return {number}
 */
export var firstUniqChar = function (s) {
  // eeesddsaf
  let hash = {}
  let queue = []
  let index = 0
  while(index < s.length) {
    if(hash[s[index]] === undefined) {
      hash[s[index]] = index
      queue.push(s[index])
    } else {
      hash[s[index]] = -1
    }
    index++
  }
  for(let i = 0; i < queue.length; ++i) {
    if(hash[queue[i]] !== -1) {
      return hash[queue[i]]
    }
  }
  return -1
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export var isAnagram = function (s, t) {
  let len = s.length
  if(len !== t.length) return false
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  if(t === s) return true
  return false
};
export var isAnagram2 = function (s, t) {
  let len = s.length
  if(len !== t.length) return false
  let i = 0
  s = s.split('')
  while(i < len) {
    let index = s.indexOf(t[i])
    if(index === -1) return false
    s.splice(index, 1)
    i++
  }
  return true
}
export var isAnagram3 = function(s, t) {
  let len = s.length
  if(len !== t.length) return false
  let hash = Array.apply(null, {length: 26}).map(item => 0)
  let hash2 = Array.apply(null, {length: 26}).map(item => 0)
  let i = 0
  while(i < len) {
    hash[s[i].charCodeAt() - 97]++
    hash2[t[i].charCodeAt() - 97]++
    i++
  }
  len = 26
  while(len--){
    if(hash[len] !== hash2[len]) return false
  }
  return true
}


/**
 * @param {string} s
 * @return {boolean}
 */
export var isPalindrome = function (s) {
  let sp = 0, ep = s.length - 1
  let a = 97, z = 122
  let zero = 48, nine = 57
  s = s.toLocaleLowerCase()
  while(sp < ep) {
    let sCode = s[sp].charCodeAt()
    if((sCode < zero || sCode > z) || (sCode > nine && sCode < a)) {
      sp++
      continue
    }
    let eCode = s[ep].charCodeAt()
    if(eCode < zero || eCode > z || (eCode > nine && eCode < a)) {
      ep--
      continue
    }
    if(sCode !== eCode) {
      return false
    } else {
      sp++
      ep--
    }
  }
  return true
};