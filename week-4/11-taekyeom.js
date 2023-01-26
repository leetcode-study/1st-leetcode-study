/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let answer = 0;
  let lt = 0;
  let rt = height.length - 1;
  while (lt < rt) {
    let w = rt - lt;
    let h = Math.min(height[lt], height[rt]);
    answer = Math.max(w * h, answer);
    if (height[lt] < height[rt]) {
      lt++;
    } else {
      rt--;
    }
  }
  return answer;
};
