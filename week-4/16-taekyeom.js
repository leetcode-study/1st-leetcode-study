/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let answer = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let lt = i + 1;
    let rt = nums.length - 1;
    while (lt < rt) {
      let sum = nums[i] + nums[lt] + nums[rt];
      if (Math.abs(answer - target) > Math.abs(sum - target)) {
        answer = sum;
      }
      if (sum < target) {
        lt++;
      } else if (sum > target) {
        rt--;
      } else {
        return answer;
      }
    }
  }
  return answer;
};
