function removeNthFromEnd(head, n) {
  class Node {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  class singleList {
    constructor(head, tail) {
      this.head = null;
      this.tail = null;
    }
    append(val) {
      let newNode = new Node(val);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    remove(index) {
      let cnt = 1;
      let prevNode = this.head;
      while (cnt !== index) {
        prevNode = prevNode.next;
        cnt++;
      }
      if (prevNode.next.next !== null) {
        prevNode.next = prevNode.next.next;
      } else {
        prevNode.next = null;
      }
    }
    display() {
      let displayArr = [];
      let currNode = this.head;
      while (currNode !== null) {
        displayArr.push(currNode.val);
        currNode = currNode.next;
      }
      return displayArr;
    }
  }
  const list = new singleList();
  head.forEach((node) => {
    list.append(node);
  });

  list.remove(head.length - n);

  return list.display();
}

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
