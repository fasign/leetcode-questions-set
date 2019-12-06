/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export var mergeArr = function (nums1, m, nums2, n) {
  let i = 0, j = 0
  while(i < m || j < n) {
    if(i >= m + j || nums1[i] >= nums2[j]) {
      nums1.splice(i, 0, nums2[j])
      nums1.pop()
      i++
      j++
    }else {
      i++
    }
  }
};
export var mergeArr2 = function (nums1, m, nums2, n) {
  let i = 0, j = 0
  let res = []
  while(i < m && j < n) {
    if(nums1[i] > nums2[j]) {
      res.push(nums2[j])
      j++
    }else {
      res.push(nums1[i])
      i++
    }
  }
  while(j < n) {
    res.push(nums2[j])
    j++
  }
  while(i < m) {
    res.push(nums1[i])
    i++
  }
  nums1 = res
};

// 二分查找
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 0,0,0,0,0 ,1,1,1,1
var solution = function (isBadVersion) {
  return function (n) {
    let s = 1
    let e = n
    while(s < e) {
      let mid = Math.floor((s + e) / 2)
      if(isBadVersion(mid)) {
        e = mid
      } else {
        s = mid + 1
      }
    }
    return s
  }
};