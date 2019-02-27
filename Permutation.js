var all = [];
function Permutation(str)
{
  // write code here
  all = [];
  if(str.length === 0) return '';
  if(str.length === 1) return [str];
  permutation([...str], '');
  return all.sort();
}

function permutation(arr, result){
  if(arr.length === 1) return result + arr[0];
  let alpha = [];
  
  for(let i = 0; i < arr.length; i++){
    if(alpha.indexOf(arr[i]) === -1){
      let tmpArr = arr.slice(0);
      let tmp = tmpArr[0];
      alpha.push(arr[i]);
      tmpArr[0] = tmpArr[i];
      tmpArr[i] = tmp;
      let r = permutation(tmpArr.slice(1,tmpArr.length), result + tmpArr[0]);
      if(r !== ''){
        all.push(r);
      }
    }
  }
  return '';
}