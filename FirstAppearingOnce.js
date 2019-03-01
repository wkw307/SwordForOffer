let queue = [];
let alpha = [];
//Init module if you need
function Init()
{
  // write code here
  alpha = [];
  queue = [];
}
//Insert one char from stringstream
function Insert(ch)
{
  // write code here
  if(alpha[ch] === undefined){
    queue.push(ch);
    alpha[ch] = 1;
  } else{
    alpha[ch] = -1;
  }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
  // write code here
  while(queue.length !== 0){
    if(alpha[queue[0]] === -1){
      queue.shift();
    }else{
      return queue[0];
    }
  }
  return '#';
}
