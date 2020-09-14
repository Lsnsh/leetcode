// 26. 删除排序数组中的重复项
// 数组、双指针
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
