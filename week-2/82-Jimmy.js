const deleteDuplicates = (head) => {
  if (!head) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let p = dummy;
  while (p) {
    if (p.next && p.next.next && p.next.val === p.next.next.val) {
      const val = p.next.val;
      while (p.next && p.next.val === val) {
        p.next = p.next.next;
      }
    } else {
      p = p.next;
    }
  }
  return dummy.next;
};
