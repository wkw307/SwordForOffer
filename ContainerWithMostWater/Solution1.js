// Solution2: two pointer
// 通俗解释：指针从两端向中间移动，每次计算指针的间隔*指针高度的较小值，然后较小值指针向靠近方向移动，可以理解为较小高度不会产生更大的面积。
// maxArea = max{maxArea(height[0:length-1]), maxArea(height[0:length-2]), maxArea(height[1,length-1]),...}
// maxArea(height[0:length-1]) min(height[0],height[length-1]) * (length - 1)
// maxArea(height[0:length-2]), maxArea(height[1,length-1]) 这两个只需要计算一个，有一个值必定小于maxArea(height[0:length-1])
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let length = height.length;
  if (length < 2) return 0;
  let max = 0;
  let l = 0;
  let r = length - 1;
  while (l < r) {
    if (Math.min(height[l], height[r]) * (r - l) > max) {
      max = Math.min(height[l], height[r]) * (r - l);
    }
    if (height[l] < height[r]){
      l++;
    } else {
      r--;
    }
  }
  return max;
};

let input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(input));