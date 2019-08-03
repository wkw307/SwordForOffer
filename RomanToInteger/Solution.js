// 优化总结
// 1. 字符串通过a.charAt(i)比a[i]更省空间
// 2. 用map和用对象存储key-value差距不大
// 3. 如果需要判断i+1是否越界，不需要在每一步都判断，限制范围保证i+1不越界，之后处理最后一个值

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let res = 0;
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let i = 0;
  while (i < s.length - 1) {
    if (map[s.charAt(i)] < map[s.charAt(i+1)]) {
      res -= map[s.charAt(i)];
    } else {
      res += map[s.charAt(i)];
    }
    i++;
  }
  res += map[s.charAt(s.length - 1)];
  return res;
};

console.log(romanToInt('LVIII'));