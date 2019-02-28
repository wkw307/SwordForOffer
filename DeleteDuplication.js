/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
  // write code here
  if(pHead === null) return null;
  if(pHead.next === null) return pHead;

  let arr = [];
  arr.push(pHead);
  let curr = pHead;
  let count = 1;
  while(curr.next !== null){
    if(curr.next.val === curr.val){
      count ++;
      arr.push(curr.next);
      curr = curr.next;
    }else{
      if(count === 1){
        arr.push(curr.next);
        curr = curr.next;
      }else{
        while(count !== 0){
          arr.pop();
          count --;
        }
        if(arr.length === 0){
          arr.push(curr.next);
          curr = curr.next;
          count = 1;
        }else{
          let pre = arr[arr.length - 1];
          pre.next = curr.next;
          curr = curr.next;
          arr.push(curr);
          count = 1;
        }
      }
    }
  }
  if(count !== 1){
    while(count !== 0){
      arr.pop();
      count --;
    }
  }
  if(arr.length === 0) return null;
  arr[arr.length - 1].next = null;
  
  return arr[0];
}
a = {
  val: 1,
  next: {
    val: 2,
    next:{
      val: 3,
      next:{
        val: 3,
        next: {
          val:4,
          next:{
            val:5,
            next: {
              val:5,
              next: null
            }
          }
        }
      }
    }
  }
}
