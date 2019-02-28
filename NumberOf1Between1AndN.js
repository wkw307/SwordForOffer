function NumberOf1Between1AndN_Solution(n)
{
  // write code here
  if(typeof n !== 'number' || n.toString().indexOf('.') !== -1 || n < 0) return 0;
  let arr = [...n.toString()];
  return numberOf1Between1AndN_Solution(arr);
}

// 假设是1～21345
function numberOf1Between1AndN_Solution(n){
  if(n.length === 1){
    if(n[0] === '0'){
      return 0;
    }else{
      return 1;
    }
  } 
  if(n[0] === '0'){
    return numberOf1Between1AndN_Solution(n.slice(1));
  }
  let result1 = numberOf1Between1AndN_Solution(n.slice(1));
  let result2 = 0;
  if(n[0] === '1'){
    result2 = parseInt(n.slice(1).join('')) + 1;
  }else{
    result2 = 1;
    for(let i = 0; i < n.length - 1; i++){
      result2 *= 10;
    }
  }
  let result3 = parseInt(n[0]) * (n.length - 1);
  for(let i = 0; i < n.length - 2; i++){
    result3 *= 10;
  }
  return result1 + result2 + result3;
}