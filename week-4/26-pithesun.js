/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let prev = nums[0]
    let k = 1;
    for(let i=1; i < nums.length; i++){
        if(prev == nums[i]){
            nums.splice(i, 1); //nums.push('_')
            i--;
            continue;
        }
        prev = nums[i];
        k++;
    }
};
