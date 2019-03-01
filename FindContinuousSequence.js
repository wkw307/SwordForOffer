function FindContinuousSequence(sum)
{
  // write code here
  if(sum < 1) return [];
  let results = [];
  for(let i = 2; i < sum; i++){
    let tmp = sum/i;
    if(tmp.toString().indexOf('.') === -1 && tmp - (i - 1)/2 > 0 && i % 2 === 1){
      let result = [];
      for(let j = 0; j < i; j++){
        result.push(tmp - parseInt(i/2) + j);
      }
      results.unshift(result);
    }
    if(i % 2 === 0 && tmp.toString().indexOf('.') !== -1 && tmp.toString().indexOf('.') === tmp.toString().length - 2 && tmp - i / 2 > 0){
      let result = [];
      for(let j = 0; j < i; j++){
        result.push(parseInt(tmp) - i / 2 + 1 + j);
      }
      results.unshift(result);
    }
  }
  return results;
}