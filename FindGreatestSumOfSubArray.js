function FindGreatestSumOfSubArray(array)
{
  // write code here
  if(array === null || array.length === 0) return 0;

  let rArr = [];
  let cArr = [];
  let max = 0;
  let curr = 0;
  for(let i = 0; i < array.length; i++){
    if(i === 0){
      rArr.push(array[i]);
      cArr.push(array[i]);
      max = array[i];
      curr = array[i];
    }else{
      if(array[i] + curr < array[i]){
        cArr = []
        cArr.push(array[i]);
        curr = array[i];
      }else{
        cArr.push(array[i]);
        curr += array[i];
      }
      if(curr > max){
        max = curr;
        rArr = cArr;
      }
    }
  }
  return max;
}