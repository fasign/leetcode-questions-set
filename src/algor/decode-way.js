/**
 * @param {string} s
 * @return {number}
 */
export function numDecodings (s) {
  let dp = [1]
  if(s[0] == 0) return 0
  if(s.length < 2) return 1
  if(s[0] + s[1] < 27) {
    dp[1] = s[1] == 0 ? 1 : 2
  } else {
    if(s[1] == 0) {
      return 0
    } else {
      dp[1] = 1
    }
  }
  for(let i = 2; i < s.length; ++i) {
    dp[i] = 0
    if(s[i] != 0) {
      dp[i] += dp[i - 1]
    }
    if(s[i -1] == 1 || (s[i - 1] == 2 && s[i] < 7)) {
      dp[i] += dp[i - 2]
    }
  }
  console.log(dp)
  return dp.pop()
}
