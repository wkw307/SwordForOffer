/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
  // write code here
  if( pHead === null ) return null;
  var meetingNode = MeetingNode(pHead);
  if(meetingNode === null) return null;

  var count = 1;
  var p1 = meetingNode.next;
  while(p1 !== meetingNode){
    p1 = p1.next;
    count ++;
  }

  p1 = pHead;
  for(let i = 0; i < count; i ++){
    p1 = p1.next;
  } 

  var p2 = pHead;
  while(p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

function MeetingNode(pHead){
  let pAhead = pHead;
  let pBehind = pHead;

  if(pAhead.next !== null){
    pAhead = pAhead.next;
  }else{
    return null;
  }

  while(pAhead !== null && pAhead !== pBehind){
    if(pAhead.next === null || pAhead.next.next === null) return null;
    pAhead = pAhead.next.next;
    pBehind = pBehind.next;
  }
  return pAhead;
}