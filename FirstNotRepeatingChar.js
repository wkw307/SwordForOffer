function FirstNotRepeatingChar(str)
{
  // write code here
  if(str.length === 0 || str.length === 1) return -1;
  let arr = str.split('');
  let o = {};
  let storage = [];
  for(let i = 0; i < arr.length; i++){
    if(o[arr[i]] === undefined){
      o[arr[i]] = {};
      o[arr[i]]['index'] = i;
      o[arr[i]]['s-index'] = storage.length;
      storage.push(1);
    }else{
      storage[o[arr[i]]['s-index']] ++;
    }
  }
  for(let i = 0; i < storage.length; i++){
    if(storage[i] === 1){
      for(let key in o){
        if(o[key]['s-index'] === i){
          return o[key]['index'];
        }
      }
    }
  }
  return -1;
}