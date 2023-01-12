/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let leng = 1;
    let next = head.next
    let valueArr = [head]
    
    while(next){
        valueArr.push(next)
        next= next.next
        leng++;
    }
    
    let idx = Math.floor(leng/2)
    //console.log(valueArr[idx])
    
    return valueArr[idx]
    
};
