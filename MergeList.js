/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 === null){
      return pHead2;
    }else if(pHead2 === null){
      return pHead1;
    }

    let mergeHead = null;
    if(pHead1.val < pHead2.val){
      mergeHead = pHead1;
      mergeHead.next = Merge(pHead1.next, pHead2);
    }else{
      mergeHead = pHead2;
      mergeHead.next = Merge(pHead1, pHead2.next);
    }
    return mergeHead;
}