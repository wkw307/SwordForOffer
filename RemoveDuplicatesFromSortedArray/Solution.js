// two pointers
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0 || nums.length === 1) return nums.length;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      left++;
      nums[left] = nums[right];
      right++;
    }
  }
  return left + 1;
};

console.log(removeDuplicates([1,1,2]));