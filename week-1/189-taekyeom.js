/**
 * 189. Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let temp = nums.slice(0)
  let lt = 0
  let rt = nums.length - (k % nums.length)

  for (let i = 0; i < nums.length; i++) {
    if (rt < nums.length) {
      nums[i] = temp[rt++]
    } else {
      nums[i] = temp[lt++]
    }
  }
}

let nums = [-1, -100, 3, 99]
let k = 2
console.log(rotate(nums, k)) // [3, 99, -1, -100]
