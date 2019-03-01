function ReverseSentence(str)
{
  // write code here
  if(str === null) return null;
  let arr = str.split(' ');
  let result = [];
  while(arr.length !== 0){
    result.push(arr.pop());
  }
  return result.join(' ');
}
