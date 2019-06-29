/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const pattern = new RegExp('^ *');
  const rmSpaceStr = str.replace(pattern, '');
  if(rmSpaceStr.length === 0) return 0;
  let sign = true;
  let hasNum = false;
  let INT_MAX = Math.pow(2, 31);
  let result = 0;
  for(let i = 0; i < rmSpaceStr.length; i++){
    if(i === 0 && rmSpaceStr[i] === '-') {
      sign = false;
      continue;
    }
    if(i === 0 && rmSpaceStr[i] === '+'){
      continue;
    }
    if(!Number.isNaN(parseInt(rmSpaceStr[i]))){
      hasNum = true;
      result = result * 10 + parseInt(rmSpaceStr[i]);
    }else{
      if(hasNum){
        break;
      }else{
        return 0;
      }
    }
  }
  if(sign){
    if(result < INT_MAX) return result;
    return INT_MAX - 1;
  }else{
    if(result < INT_MAX + 1) return - result;
    return - INT_MAX;
  }
};

console.log(myAtoi('     -42'))
