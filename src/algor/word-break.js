export const wordBreak = (s, dir) => {
  let dirHash = new Set()
  dir.map((key => {
    dirHash.add(key)
  }))

  let len = s.length
  let end = 1
  let dp = [true]
  while(end <= len) {
    let start = 0
    while(start < end) {
      if(dp[start] && dirHash.has(s.substring(start, end))) {
        dp[end] = true
        break
      }
      start++
    }
    end++
  }
  return dp[len]
}

function test(s, hash, index) {
  for(let advance = index + 1; advance < s.length; ++advance) {
    if(hash.has(s.substring(index, advance))) {
        s.substring(index, advance)
    }
    return test(s, hash, advance)
  }
}

export const wordBreak2 = (s, dir) => {
  let dirHash = new Set()
  dir.map((key => {
    dirHash.add(key)
  }))
  test(s, dirHash, 0)
}