// 分治、递归
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let count = 0;
  let tmp = head;
  while (tmp !== null && count !== k) {
    tmp = tmp.next;
    count++;
  }
  if (count === k) {
    tmp = reverseKGroup(tmp, k);
    while (count > 0) {
      count--;
      let curr = head.next;
      head.next = tmp;
      tmp = head;
      head = curr;
    }
    head = tmp;
  }
  return head;
};