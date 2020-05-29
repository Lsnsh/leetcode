/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0, len = nums.length; i <= len - 2; i++) {
    let index = nums.indexOf(target - nums[i], i + 1);
    if (index > -1 && index !== i) {
      return [i, index];
    }
  }
  return [];
};
