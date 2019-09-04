/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.length === 0) return 1;
    if (nums.length === 1 && nums[0] !== 1) return 1;
    let index = 0;
    while (index < nums.length) {
        if (nums[index] < 0 || nums[index] > nums.length || nums[index] === index + 1 || !nums[index]) {
            index++;
        } else {
            if (nums[nums[index] - 1] !== nums[index]) {
                let tmp = nums[nums[index] - 1];
            nums[nums[index] - 1] = nums[index];
            nums[index] = tmp;
            } else {
                index++;
            }
            
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};

console.log(firstMissingPositive([7,8,9,11,12]))