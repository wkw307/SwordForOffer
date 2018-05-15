/*
 * Description: 输入一个链表，从尾到头打印链表每个节点的值。
 * Solution: 从头遍历链表结点的值并压入数组，再利用reverse()实现数组值的反转。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    // write code here
    var curr = head;
    var value = [];
    while (curr != null) {
        value.push(curr.val);
        curr = curr.next;
    }
    return value.reverse();
}