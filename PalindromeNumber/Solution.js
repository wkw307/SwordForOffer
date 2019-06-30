/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  let reverseNum = 0;
  let original = x;
  let currentNum = 0;
  while(original !== 0){
    currentNum = original % 10;
    reverseNum = reverseNum * 10 + currentNum;
    original = parseInt(original / 10);
  }
  if(reverseNum === x) {
    return true;
  }else{
    return false;
  }
};

console.log(isPalindrome(-121));
