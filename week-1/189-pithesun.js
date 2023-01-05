/* 답 참고 */

var rotate = function(nums, k) {
   k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    
   let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
   } // suppose  ----->---> 
	reverse(0, nums.length-1); // reverse   <--<------
	 reverse(0, k-1) // reverse first part ---><----
   reverse(k, nums.length-1)// reverse second part --->----->
    
};


// time exceeded 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arrleng = nums.length
    let startIndex = arrleng -  (k % arrleng)

    //두번째 요소를 저장한다
    //첫번째 요소를 두번째 요소에 저장한다
    //세번째 요소를 저장한다
    //두번째 요소를 세번째 요소에 저장한다.
    
    for(let i=0; i < k; i++){
        let next = nums[1]
        let before = nums[0]
        rotateOnce(before, 1, next, nums, arrleng, arrleng )
    }
};

function rotateOnce(before, nextidx, next, arr, arrleng ,fixedleng) {
    if(arrleng == 0) return arr;
    if(fixedleng == 1) return arr;
    arr[nextidx] = before;
    
    rotateOnce( next, (nextidx + 1) % fixedleng, arr[(nextidx + 1) % fixedleng], arr, arrleng -1, fixedleng)
}
