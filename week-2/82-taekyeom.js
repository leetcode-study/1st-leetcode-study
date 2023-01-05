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
var deleteDuplicates = function (head) {
  let answer = new ListNode(0)
  let cur = answer

  while (head && head.next) {
    if (head.val !== head.next.val) {
      cur.next = new ListNode(head.val)
      cur = cur.next
    } else {
      const val = head.val

      while (head.next && val === head.next.val) {
        head = head.next
      }
    }

    head = head.next
  }

  if (head) {
    cur.next = new ListNode(head.val)
    cur = cur.next
  }

  return answer.next
}
