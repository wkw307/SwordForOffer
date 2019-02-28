/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
  // write code here
  if(pHead1 === null || pHead2 === null) return null;
  let p1 = {};
  while(pHead1 !== null){
    p1[pHead1.val] = pHead1;
    pHead1 = pHead1.next;
  }
  while(pHead2 !== null){
    if(p1[pHead2.val] !== undefined){
      return pHead2;
    }
    pHead2 = pHead2.next;
  }
  return null;
}