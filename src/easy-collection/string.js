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

/**
 * @param {string} str
 * @return {number}
 */
export var myAtoi = function (str) {
  str = str.replace(/^ */, '')
  if(!str) return 0
  let len = str.length
  let i = 1
  let res = ''
  if(str[0] === '-'
    || str[0] === '+'
    || (str[0].charCodeAt() >= 48
      && str[0].charCodeAt() <= 57)) {
      res = str[0]
    } else {
      return 0
    }
  while(i < len) {
    if(str[i].charCodeAt() < 48
      || str[i].charCodeAt() > 57) {
      break
    } else {
      res += str[i]
    }
    i++
  }
  res = Number(res)
  if(res !== res) return 0
  if(res > 2147483647) return 2147483647
  if(res < -2147483648) return -2147483648
  return res
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export var strStr = function (haystack, needle) {
  if(!needle) return 0
  let nlen = needle.length
  let len = haystack.length - nlen + 1
  let i = 0
  let j = 0
  while(i < len) {
    j = 0
    while(j < nlen) {
      if(haystack[i + j] !== needle[j]) {
        break
      }
      j++
    }
    if(j === nlen) {
      return i
    }
    i++
  }
  return -1
};

/**
 * @param {number} n
 * @return {string}
 */
export var countAndSay = function (n) {
  if(n === 1) return '1'
  let base = '1'
  let res = []
  for(let i = 0; i < n - 1; ++i) {
    res = []
    let len = base.length
    for(let j = 0; j < len; j++) {
      if(j === 0 || res[res.length - 1].value !== base[j]) {
        res.push({
          value: base[j],
          times: 1
        })
      } else {
        res[res.length - 1].times++
      }
    }
    base = ''
    res.forEach(item => {
      base += item.times + item.value
    })
  }
  return base
};

/**
 * @param {string[]} strs
 * @return {string}
 */
export var longestCommonPrefix = function (strs) {
  let index = 0
  let len = strs.length
  if(!len) return ''
  if(len === 1) return strs[0]
  while (1) {
    let base = strs[0][index]
    let sIndex = 1
    while(sIndex < len) {
      if(!strs[sIndex][index] || strs[sIndex][index] !== base) return strs[0].substring(0, index)
      sIndex++
    }
    index++
  }
};
