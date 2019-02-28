function maxInWindows(num, size)
{
  // write code here
  if(num === null) return null;
  if(size === 0) return [];
  if(size > num.length) return [];
  if(size === 1) return num;

  let result = [];

  result.push(num);
  let tmp = [];
  for(let i = 0; i < num.length - 1; i++){
    tmp.push(max(num[i], num[i+1]));
  }
  result.push(tmp);

  for(let i = 2; i < size; i++){
    tmp = [];
    for(let j = 0; j < result[i - 1].length - 1; j++){
      tmp.push(max(result[i-1][j], num[j + i]));
    }
    result.push(tmp);
  }
  return result[size - 1];
}

function max(num1, num2){
  if(num1 < num2){
    return num2;
  }else{
    return num1;
  }
}