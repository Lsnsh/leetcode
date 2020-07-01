// 35. 搜索插入位置
// 数组、二分查找（未使用）、双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 解法一
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  var insertIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
    if (target > nums[i]) {
      insertIndex++;
    } else {
      return insertIndex;
    }
  }
  return insertIndex;

  // 解法二
  // if (target < nums[0]) return 0;
  // if (target > nums[nums.length - 1]) return nums.length;
  // for (var i = 0; i < nums.length; i++) {
  //   if (target === nums[i]) {
  //     return i;
  //   }
  //   if (target > nums[i] && target < nums[i + 1]) {
  //     return i + 1;
  //   }
  // }
};
