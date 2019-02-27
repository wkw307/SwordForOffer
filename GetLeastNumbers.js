function GetLeastNumbers_Solution(input, k)
{
  // write code here
  if(input === null || input.length < k || k < 1){
    return null;
  }

  let result = [];
  for(let i = 0; i < input.length; i++){
    if(result.length < k){
      result.push(input[i]);
      result.sort();
    }else{
      if(result[result.length - 1] > input[i]){
        result.pop();
        result.push(input[i]);
        result.sort();
      }
    }
  }
  return result;
}