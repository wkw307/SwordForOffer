/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s;
  const strLen = s.length;
  const groupSum = 2 * numRows - 2;
  const groupNum = parseInt(strLen / groupSum);
  const restNum = strLen % groupSum;
  const result = [];
  for (let i = 0; i < groupNum; i++){
    for(let j = 0; j < numRows - 1; j++){
      if(j === 0){
       result.push(s.slice(i * groupSum, i * groupSum + numRows).split(''));
       continue;
      }
      const tmp = new Array(numRows);
      tmp.fill('');
      tmp[numRows - j - 1] = s[i * groupSum + numRows + j - 1];
      result.push(tmp);
    }
  }
  if(restNum < numRows){
    result.push(s.slice(groupNum * groupSum).split(''));
  }else{
    result.push(s.slice(groupNum * groupSum, groupNum * groupSum + numRows).split(''));
    const tmp = groupNum * groupSum + numRows;
    for(let i = tmp; i < strLen; i++){
      const tmpArr = new Array(numRows);
      tmpArr.fill('');
      tmpArr[numRows - (i - tmp) - 2] = s[i];
      result.push(tmpArr);
    }
  }
  console.log(result);
  let resultString = '';
  for(let i = 0; i < numRows; i++){
    for(let j = 0; j < result.length; j++){
      if(result[j][i]){
        resultString += result[j][i];
      }
    }
  }
  return resultString;
};

console.log(convert("PAYPALISHIRING", 9));
