export const climb = n => {
  let dp = [1, 2]
  let index = 2
  while(index < n) {
    dp[index] = dp[index - 1] + dp[index - 2]
    index++
  }
  return dp[n - 1]
}