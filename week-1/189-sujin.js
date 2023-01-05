/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const arraySize = nums.length;
    const numsCopy = nums.slice();

    return nums.reduce(
        (accumulator, currentValue, index) => {
            const remainder = (index + k) % (arraySize);
            accumulator[remainder] = currentValue;
            return accumulator;
        },
        numsCopy
    );
};