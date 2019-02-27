function reOrderArray(array)
{
  // write code here
  array.sort((a, b) => {
    if(a % 2 === 1 && b % 2 === 0){
      return -1;
    }
    if(a % 2 === 0 && b % 2 === 1){
      return 1;
    }
    return 0;
  });
  return array;
}
console.log(reOrderArray([1,2,3,4,5,6,7]));