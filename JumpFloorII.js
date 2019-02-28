function jumpFloorII(number)
{
  // write code here
  if(number < 0 || typeof number !== 'number' ) return 0;
  if(number === 1) return 1;
  if(number === 2) return 2;

  let result = [1, 2];
  for(let i = 2; i < number; i++){
    let tmp = 1;
    result.forEach(element =>{
      tmp += element;
    })
    result.push(tmp);
  }
  return result[number - 1];
}