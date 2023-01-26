/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // min(y1, y2) * (x2 - x1)
    
    //brute force -> n + (n-1) + (n-2) -> (n)(n+1) / 2 : 10^8
    /*    let maxAmount = -1
    
    for(let x1=0; x1 < height.length; x1++){
        for(let x2=x1 + 1; x2 < height.length; x2++){
            let w = (x2 == x1) ? x1 : (x2 - x1)
            let h = Math.min(height[x1], height[x2])
            
            maxAmount = Math.max(maxAmount, w*h)
        }
    }
    
    //console.log("maxAmount : " + maxAmount )
    
    return maxAmount */
    
    let left = 0;
    let right = height.length -1;
    let maxAmount = -1
    
    while(left < right){
        let w = right - left;
        let h = Math.min(height[left], height[right])
        maxAmount = Math.max(maxAmount, w*h)
        
        if(height[left] <= height[right]){
            left++;
        }else if(height[left] > height[right]){
            right--;
        }
    }
    
    return maxAmount
};
