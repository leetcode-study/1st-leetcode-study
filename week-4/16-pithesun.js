/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a,b) => a-b)
    // -4 -1 1 2 
    let answer = 1000001
    let sum = 0;
    
    for(let m = 1; m <  nums.length - 1; m++){
        let left = 0
        let right = nums.length - 1   

        while(left < m && m < right){
            sum = (nums[left] + nums[m] + nums[right]) 
            if(sum == target){
               left++; right--;
                break
            }else if(sum > target){
                right--;
            }else{
                left++;
            }
        }
        
        if(Math.abs(answer- target) > Math.abs(sum - target)){
            answer = sum
        }
    }
    return answer
};
