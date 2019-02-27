//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
    sArr = [...s];
    pArr = [...pattern];
    if(s === undefined || pattern === undefined) return false;
    return matchCore(sArr, pArr, 0, 0);
}

function matchCore(sArr, pArr, sIndex, pIndex){
  // 如果s、pattern都匹配完，返回true
  if(sIndex === sArr.length && pIndex === pArr.length) return true;
  // 如果pattern匹配完，s没有匹配完，返回false
  if(sIndex !== sArr.length && pIndex === pArr.length) return false;
  
  // 如果pattern下一个字符是*
  if(pArr[pIndex + 1] === '*'){
    // 如果当前字符匹配，或者当前pattern字符是'.'且s未匹配完即匹配'.'
    if(pArr[pIndex] === sArr[sIndex] || (pArr[pIndex] === '.' && sIndex !== sArr.length)){
      return matchCore(sArr, pArr, sIndex + 1, pIndex + 2) 
        || matchCore(sArr, pArr, sIndex + 1, pIndex)
        || matchCore(sArr, pArr, sIndex, pIndex + 2);
    }else{
      // 当前字符不匹配'*'
      return matchCore(sArr, pArr, sIndex, pIndex + 2);
    }
  }
  // 当前字符正常匹配
  if(sArr[sIndex] === pArr[pIndex] || (pArr[pIndex] === '.' && sIndex !== sArr.length)){
    return matchCore(sArr, pArr, sIndex + 1, pIndex + 1);
  }
  return false;
}

console.log(match('baa', 'ba*b'));