function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
  // write code here
  if(pHead === null) return null;
  
  let p = pHead.next;
  let result = new RandomListNode(pHead.label);
  let next = result;
  let arr = {};
  arr[result.label] = result;
  while(p !== null){
    next.next = new RandomListNode(p.label);
    arr[next.next.label] = next.next; 
    next = next.next;
    p = p.next;
  }
  let r = result;
  p = pHead;
  while(r !== null){
    if(p.random !== null){
      r.random = arr[p.random.label];
    }
    r = r.next;
    p = p.next;
  }
  return result;
}
var e = {
  label: 'e',
  next: null,
  random: null
}
var d = {
  label: 'd',
  next: e,
  random: null
}
var c = {
  label: 'c',
  next: d,
  random: null
}
var b = {
  label: 'b',
  next: c,
  random: e
}

var a = {
  label: 'a',
  next: b,
  random: c
}

d.random = b;





console.log(Clone(a));