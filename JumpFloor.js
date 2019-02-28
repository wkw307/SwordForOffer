function jumpFloor(number)
{
  // write code here
  if(number === 1) return 1;
  if(number === 2) return 2;
  if(number < 0 || typeof number !== 'number') return 0;
  
  let results = [1,2];
  for(let i = 2; i < number; i++){
    results.push(results[i-1]+results[i-2]);
  }
  return results[number - 1];
}