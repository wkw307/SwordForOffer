/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let prev = head;
  for (let i = 0; i < n; i++) {
    prev = prev.next;
  }
  if (prev === null) {
    return head.next;
  }
  let result = head;
  while (prev.next) {
    prev = prev.next;
    result = result.next;
  }
  result.next = result.next.next;
  return head;
};