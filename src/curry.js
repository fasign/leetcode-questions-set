export const curry = function (...args1) {
  let temp = [...args1]
  return function fn (...args) {
    temp.push(...args)
    if(temp.length >= 4) {
      const res = temp.reduce((acc, cur) => {
        return acc * cur
      }, 1)
      console.log(res)
      return res
    } else {
      return fn
    }
  }
}

const fn = (a, b, c) => {
  return a * b * c
}
