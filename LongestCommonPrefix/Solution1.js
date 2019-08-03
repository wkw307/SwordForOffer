// 先对候选字符串排序，选取差异最大的两个字符串进行比较即可
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  const sortedStrs = strs.sort();
  let max = 0;
  for (let i = 0; i < sortedStrs[0].length && i < sortedStrs[sortedStrs.length - 1].length; i++){
    if (sortedStrs[0][i] !== sortedStrs[sortedStrs.length - 1][i]) {
      max = i;
      break;
    } else {
      max = i + 1;
    }
  }
  return sortedStrs[0].slice(0, max);
};

console.log(longestCommonPrefix(["c","c","c"]))