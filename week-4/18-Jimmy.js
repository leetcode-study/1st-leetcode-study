var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) {
          left++;
        }
        if (sum > target) {
          right--;
        }
        if (sum === target) {
          let isEqual = false;
          answer.forEach((arr) => {
            const [first, second, third, fourth] = arr;
            if (
              first === nums[i] &&
              second === nums[j] &&
              third === nums[left] &&
              fourth === nums[right]
            ) {
              isEqual = true;
            }
          });
          if (!isEqual) {
            answer.push([nums[i], nums[j], nums[left], nums[right]]);
          }
          left++;
        }
      }
    }
  }
  return answer;
};
