function LeftRotateString(str, n)
{
  // write code here
  if(str === null) return '';
  if(n < 0) return str;
  let arr = str.split('');
  for(let i = 0; i < n; i++){
    let tmp = arr.shift();
    arr.push(tmp);
  }
  return arr.join('');
}