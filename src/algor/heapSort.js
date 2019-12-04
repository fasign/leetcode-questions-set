let len = 0
function buildHeap(arr) {
  // 取最后一个非叶子节点
  let index = Math.floor(arr.length / 2)
  while(index--) {
    heapify(arr, index)
  }
}

function heapify(arr, index) {
  let left = 2 * index + 1
  let right = 2 * index + 2
  let max = index
  if(left < len && arr[max] < arr[left]) {
    max = left
  }
  if(right < len && arr[max] < arr[right]) {
    max = right
  }
  if(max !== index) {
    swap(arr, index, max)
    heapify(arr, max)
  }
}

function swap(arr, i, j) {
  let t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

export const heapSort = arr => {
  len = arr.length - 1
  buildHeap(arr)
  for(let index = len; len > 1; index--) {
    swap(arr, index, 0)
    len--
    heapify(arr, 0)
  }
  console.log('res: ', arr)
}
