let arr = [1, 12, 43, 54, 5555, 16, 7, 123, 456, 88, 2, 433, 45]
let arr1 = [1, 12, 43, 54, 5555, 16, 7, 123, 456, 88, 2, 433, 45]

// 基本步骤
// 1.在数组中选择一个基准点pivot
// 2.排序数组,小雨pivot的放到左边,大于的放到右边
// 3.最后利用递归,对左边和右边的数组进行1,2操作
//快速排序  较简单,有大量操作数组的方法,空间复杂度较高
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

//交换数组元素
function swap(arr, a, b) {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}
/**
 *
 * @param {*} arr  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function divide(arr, p, r) {
  const pivot = arr[r - 1]
  let i = p - 1
  for (let j = p; j < r - 1; j++) {
    if (arr[j] < pivot) {
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, r - 1)
  return i + 1
}
function qSort(arr, p, r) {
  if (p < r - 1) {
    const q = divide(arr, p, r)
    qSort(arr, p, q)
    qSort(arr, q + 1, r)
  }
  return arr
}
console.log(qSort(arr1, 0, arr1.length))
