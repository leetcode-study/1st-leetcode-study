/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    
    let answer = []
    let uniques = new Set(); //distinct triplets
    
    let middle = 1
    for(let m = 1; m <  nums.length - 1; m++){
        let left = 0
        let right = nums.length - 1   
        let triplet = []
        
        while(left < m && m < right){
            let sum = (nums[left] + nums[m] + nums[right]) 
            if(sum == 0){
                let str = [nums[left], nums[m], nums[right]].join("")
                if(!uniques.has(str)){
                    answer.push([nums[left], nums[m], nums[right]])
                    uniques.add(str)
                }
               left++; right--;
            }else if(sum > 0){
                right--;
            }else{
                left++;
            }
        }
    }
    return answer
};
