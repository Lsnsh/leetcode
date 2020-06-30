// 删除排序数组中的重复项
// 数组、双指针
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 72 ms	38.1 MB
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;

  // 80 ms	38.1 MB
  // var len = 0;
  // for (var i = 1; i < nums.length; i++) {
  //   if (nums[i] != nums[i - 1]) {
  //     len++;
  //     nums[len] = nums[i];
  //   }
  // }
  // return len + 1;
};