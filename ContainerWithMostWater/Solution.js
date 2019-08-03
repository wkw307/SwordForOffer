// Solution1: exhaustive
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let length = height.length;
  if (length < 2) return 0;
  let max = 0;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j + i < length; j++) {
      let tmp = (height[j] < height[j + i] ? height[j] : height[j + i]) * i;
      if (tmp > max) {
        max = tmp;
      }
    }
  }
  return max;
};

let input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(input));