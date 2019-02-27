function IsPopOrder(pushV, popV)
{
  // write code here
  if(pushV.length !== popV.length) return false;
  if(pushV.length === 0) return true;
  let stack = [];

  let pushIndex = 0;
  let popIndex = 0;

  while(popIndex < popV.length){
    if(stack.length === 0 && pushIndex < pushV.length){
      stack.push(pushV[pushIndex]);
      pushIndex ++;
    }
    if(stack[stack.length - 1] === popV[popIndex]){
      stack.pop();
      popIndex ++;
    }else if(pushIndex < pushV.length){
      stack.push(pushV[pushIndex]);
      pushIndex ++;
    }else{
      return false;
    }
  }
  return true;
  
}