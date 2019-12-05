/**
 * @param {string} s
 * @return {string}
 */
// ds3[a2[c]d]as

// 3--a--2--c
export var decodeString = function (s) {
  let stack = [{
    val: '',
    times: 1
  }]
  for(let i = 0; i < s.length; ++i) {
    if(s[i] === '[') {
      let temp = stack[stack.length - 1].val
      let times = temp.match(/\d+$/)[0]
      stack.push({
        val: '',
        times: Number(times)
      })
      stack[stack.length - 2].val = temp.substring(0, temp.length - times.length)
    } else if(s[i] === ']') {
      let cur = stack.pop()
      cur = cur.val.repeat(cur.times)
      stack[stack.length - 1].val += cur
    } else {
      stack[stack.length - 1].val += s[i]
    }
  }
  return stack[0].val
};
