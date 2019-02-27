/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
  // write code here
  if(pHead === null) return null;
  let pNode = pHead;
  let pPrev = null;
  while(pNode !== null){
    let pNext = pNode.next;
    if(pNext === null) {
      pNode.next = pPrev;
      return pNode;
    }
    pNode.next = pPrev;
    pPrev = pNode;
    pNode = pNext;
  }
}