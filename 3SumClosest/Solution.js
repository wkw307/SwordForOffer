/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => { return a - b; })
  let result = nums[0] + nums[1] + nums[2];
  for (let mid = 1; mid < nums.length - 1; mid++) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      let tmp = nums[left] + nums[mid] + nums[right];
      result = Math.abs(tmp - target) < Math.abs(result - target) ? tmp : result;
      if (tmp < target) {
        left = left + 1 === mid ? left + 2 : left + 1;
      } else if (tmp > target) {
        right = right - 1 === mid ? right - 2 : right - 1;
      } else {
        return target;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1,0,1,1,55], 3));
