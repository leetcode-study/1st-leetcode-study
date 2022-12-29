/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i]
    }
  }

  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0
  }
}

let nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums)) // [(1, 3, 12, 0, 0)]
