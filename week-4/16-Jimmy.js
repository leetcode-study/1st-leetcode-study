var threeSumClosest = function (nums, target) {
  let closest = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (target > sum) {
        left++;
      }
      if (target < sum) {
        right--;
      }
      if (target === sum) {
        return closest;
      }
    }
  }
  return closest;
};
