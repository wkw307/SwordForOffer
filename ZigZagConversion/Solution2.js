/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s;
  const strLen = s.length;
  const groupSum = 2 * numRows - 2;
  let strResult = '';
  for(let i = 0; i < numRows; i++){
    let index = i;
    while(index < strLen){
      strResult += s[index];
      let tmpIndex = index + 2 * numRows - 2 - 2 * i;
      if(tmpIndex < strLen && tmpIndex !== index && tmpIndex !== index + groupSum){
        strResult += s[tmpIndex];
      }
      index += groupSum;
    }
  }
  return strResult;
};

console.log(convert("PAYPALISHIRING", 3));
