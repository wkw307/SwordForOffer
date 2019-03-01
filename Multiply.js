function multiply(array)
{
  // write code here
  let result = [];
  result.push(1);
  for(let i = 1; i < array.length; i++){
    result[i] = result[i - 1] * array[i - 1];
  }
  let tmp = 1;
  for(let i = array.length - 2; i >= 0; i--){
    tmp *= array[i + 1];
    result[i] = tmp * result[i];
  }
  return result;
}