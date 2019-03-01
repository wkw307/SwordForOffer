function GetNumberOfK(data, k)
{
  // write code here
  // if(data.indexOf(k) === -1 || data === null) return 0;
  // return data.lastIndexOf(k) - data.indexOf(k) + 1;

  // 二分查找 找到indexA 和 indexB、
  if(data === null || data.length === 0) return 0;
  data.unshift(data[0] - 1);
  data.push(data[data.length - 1] + 1);
  let p = 0;
  let q = data.length - 2;
  let index = parseInt((p + q)/2);
  while(!(data[index] !== k && data[index + 1] === k) && p < q){
    if(data[index] < k){
      p = index + 1;
      index = parseInt((p + q)/2);
    }else{
      q = index - 1;
      index = parseInt((p + q)/2);
    }
  }
  if(data[index + 1] !== k) return 0;
  let indexA = index;
  p = 1;
  q = data.length - 1;
  index = parseInt((p + q)/2);
  while(!(data[index] !== k && data[index - 1] === k) && p < q){
    if(data[index] <= k){
      p = index + 1;
      index = parseInt((p + q)/2);
    }else{
      q = index - 1;
      index = parseInt((p + q)/2);
    }
  }
  return index - indexA - 1;
}