/**
 * 找出数组中重复的数字
 * 在一个长度为n的数组里的所有数字都在0～n-1的范围内。数组中的某些数字是重复的。找出其中的任意一个重复的数字。
 */

function duplicationInArray(arr){
  if(!arr.length) return '空数组';
  const n = arr.length;
  let i = 0;
  while(i < n){
    if(arr[i] > n - 1){
      return '数组元素>n';
    }
    if(arr[i] !== i){
      if(arr[arr[i]] === arr[i]){
        return arr[i];
      }else{
        let tmp = arr[i];
        arr[i] = arr[arr[i]];
        arr[i] = tmp;
      }
    }else{
      i ++;
    }
  }
  return '数组中没有重复元素';
}
console.assert(duplicationInArray([]) === '空数组', '空数组');
console.assert(duplicationInArray([3,4]) === '数组元素>n', '数组元素>n');
console.assert(duplicationInArray([4,3,2,1,0]) === '数组中没有重复元素', '数组中没有重复元素');
console.assert(duplicationInArray([3,2,2,4,5,1]) === '2', '2');