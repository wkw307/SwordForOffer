/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  const tmp = head.next;
  head.next = swapPairs(head.next.next);
  tmp.next = head;
  return tmp;
};

var l = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        }
      }
    }
  }
};

console.log(JSON.stringify(swapPairs(l)));