/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let max = 0;
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let first = strs.shift();
  while (true) {
    let flag = true;
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length === max || strs[i].charAt(max) !== first.charAt(max)) {
        flag = false;
      }
    }
    if (flag) {
      max++;
    } else {
      break;
    }
  }
  return strs[0].slice(0, max);
};

console.log(longestCommonPrefix(["dog","racecar","car"]))