// Array.sort()
// [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
// [-2, -2, -2, -4, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let result = [];
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let [index, number] of nums.entries()) {
    if (number > 0) return result;
    if (number === nums[index - 1]) continue;
    left = index + 1;
    right = nums.length - 1;
    let tmp = 0;
    while (left < right) {
      tmp = number + nums[left] + nums[right];
      if (tmp === 0) {
        result.push([number, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (tmp < 0) {
        left++;
      } else if (tmp > 0) {
        right--;
      }
    } 
  }
  return result;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))
// -2 -1 0 1 2 3