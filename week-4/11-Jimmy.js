var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let answer = 0;

  while (left < right) {
    answer = Math.max(
      answer,
      Math.min(height[left], height[right]) * (right - left)
    );

    height[left] <= height[right] ? left++ : right--;
  }
  return answer;
};
