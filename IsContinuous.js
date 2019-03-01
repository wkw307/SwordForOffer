function IsContinuous(numbers)
{
  // write code here
  if(numbers === null || numbers.length !== 5) return false;
  let min = -1;
  let max = -1;
  let o = {};
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 0){
      continue;
    }
    if(min === -1){
      max = numbers[i];
      min = numbers[i];
      o[numbers[i]] = 1;
      continue;
    }
    if(o[numbers[i]] !== undefined) return false;
    if(numbers[i] > max){
      max = numbers[i];
      o[numbers[i]] = 1;
    }
    if(numbers[i] < min){
      min = numbers[i];
      o[numbers[i]] = 1;
    }
    
  }
  if(max - min < 5){
    return true;
  }else{
    return false;
  }
}