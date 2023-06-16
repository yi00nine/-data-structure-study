let arr = [1, 12, 43, 54, 5555, 16, 7, 123, 456, 88, 2, 433, 45]
function swap(a, b, arr) {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}

//快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  arr.forEach((el) => {
    if (el < pivot) {
      left.push(el)
    } else {
      right.push(el)
    }
  })
  return quickSort(left).concat([pivot], quickSort(right))
}
console.log(quickSort(arr))
