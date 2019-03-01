function FindNumbersWithSum(array, sum)
{
  // write code here
  if(array === null || array.length < 2 || array[0] > sum) return [];

  let p = 0;
  let q = array.length - 1;
  while(p < q){
    if(array[p] > sum){
      break;
    }else{
      while(array[q] > (sum - array[p]) && p < q){
        q --;
      }
      if(p < q && array[q] + array[p] === sum){
        return [array[p],array[q]];
      }
      p ++;
    }
  }
  return [];
}