/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(k <= 0) return null;
    if(head === null) return null;

    var pAhead = head;
    var pBehind = head;
    var step = 0;
    while(pAhead.next !== null){
      if(step === k - 1){
        pBehind = pBehind.next;
        pAhead = pAhead.next;
      }else{
        pAhead = pAhead.next;
        step ++;
      }
    }
    if(step === k - 1){
      return pBehind;
    }
    return null;
}