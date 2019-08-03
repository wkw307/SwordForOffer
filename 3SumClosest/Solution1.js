/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let result;
  let apart = Infinity;
  for (let i = 0; i < nums.length - 2; i++){
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let currSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(currSum - target) < Math.abs(apart)){
        result = currSum;
        apart = currSum - target;
      }
      if (currSum > target) {
        right--;
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (currSum < target) {
        left++;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else {
        return target;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1,0,1,1,55], 3));
