function GetUglyNumber_Solution(index)
{
  // write code here
  if(index === 0) return 0;
  if(index === 1) return 1;
  let result = [1];
  for(let j = 1; j < index; j++){
    let ugly1 = 0;
    let ugly2 = 0;
    let ugly3 = 0;
    for(let i = 0; i < result.length; i++){
      if(result[i] * 2 > result[result.length - 1]){
        ugly1 = result[i] * 2;
        break;
      }
    }
    for(let i = 0; i < result.length; i++){
      if(result[i] * 3 > result[result.length - 1]){
        ugly2 = result[i] * 3;
        break;
      }
    }
    for(let i = 0; i < result.length; i++){
      if(result[i] * 5 > result[result.length - 1]){
        ugly3 = result[i] * 5;
        break;
      }
    }
    
    if(ugly1 <= ugly2 && ugly1 <= ugly3){
      result.push(ugly1);
    }else if(ugly2 <= ugly1 && ugly2 <= ugly3){
      result.push(ugly2);
    }else{
      result.push(ugly3);
    }
  }
  return result[index - 1];
}