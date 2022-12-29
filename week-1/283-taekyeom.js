/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let temp = nums.slice(0)
  let idx = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = temp[i]
    }
  }

  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0
  }
}
