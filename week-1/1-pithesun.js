/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right){
        let sum = numbers[left] + numbers[right];
        if(sum > target){
            right--;
        }else if ( sum == target){
            break;
        }else if (sum < target){
            left++;
        }
    }

    return [left+1, right+1]

};
