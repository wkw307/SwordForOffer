function rectCover(number)
{
  // write code here
  if(number < 1) return 0;
  if(number === 1) return 1;
  if(number === 2) return 2;

  let result = [];
  result.push(0);
  result.push(1);
  result.push(2);
  for(let i = 3; i < number + 1; i++){
    result.push(result[i-1]+result[i-2]);
  }
  return result[number];
}