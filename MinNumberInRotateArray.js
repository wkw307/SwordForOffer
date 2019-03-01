function minNumberInRotateArray(rotateArray)
{
  // write code here
  if(rotateArray === null || rotateArray.length === 0 ) return 0;
  if(rotateArray.length === 1) return rotateArray[0];
  let p = 0;
  let q = rotateArray.length - 1;
  let index = parseInt((p + q)/2);

  while(p < q && q - p !== 1){
    if(rotateArray[p] === rotateArray[q] && rotateArray[p] === rotateArray[index]){
      break;
    }else{
      if(rotateArray[index] < rotateArray[p]){
        q = index;
        index = parseInt((q+p)/2);
      }else{
        p = index;
        index = parseInt((q+p)/2);
      }
    }
  }
  if(q - p === 1 && rotateArray[q] < rotateArray[p]) return rotateArray[q];
  let min = rotateArray[0];
  for(let i = 0; i < rotateArray.length; i++){
    if(rotateArray[i] < min){
      min = rotateArray[i];
    }
  }
  return min;
}