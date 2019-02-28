function duplicate(numbers, duplication)
{
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  if(numbers === null) return false;
  let a = {};
  for(let i = 0; i < numbers.length; i ++){
    if(a[numbers[i]] !== undefined){
      duplication[0] = numbers[i];
      return true;
    }else{
      a[numbers[i]] = 1;
    }
  }
  return false;
}