/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let rotateNums = nums.splice(-k, k);
  nums.unshift(...rotateNums);
  return nums;
};

// k 전체를 순회하면 시간이 너무 오래 걸리기 때문에
// k의 크기를 줄여야한다.
// 만약 nums의 길이가 3인데 k가 15이면 똑같은 로직을 5번 시행하는것이기
// 때문에 k를 nums의 length 나눈 나머지값을 k로 사용한다.

// 또한 매번 nums배열의 마지막 숫자를 제거하고 배열의 앞에 추가하는
// 로직은 시간복잡도가 O(n)인 로직을 매번 수행하기 때문에
// 한번에 splice를 사용해 제거해준다.
// splice는 음수 파라미터가 들어오면 뒤에서부터 배열을 탐색한다.
// 즉 splice(-1,1)은 뒤에서 1번째 부터 1개 라는 뜻이다.
