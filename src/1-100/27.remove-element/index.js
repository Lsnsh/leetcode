// 27. 移除元素
// 数组、双指针
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 84 ms	32.9 MB
  var len = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[len] = nums[i];
      len++;
    }
  }
  return len;
};
